import { ref } from "vue";
import type { TInputFormat, TOutputFormat } from "../../models/type";
import { get } from "@/core/services/helpers/request.helper";
import { transformData } from "./chart";

export const state = ref<TOutputFormat>({
    series: [],
    labels: []
} as TOutputFormat);


export const timeperiod = ref('week');

export const categories = ['week','month','quarter','year']

export const fetch = async () => {
    await get<TInputFormat>('/api/invoices/compare-total',{timeperiod: timeperiod.value}).then(response => {
        if (response?.data) {
            state.value = transformData(response.data)
        }
    })
}

export const apexOptions = {
    colors: ['#3056D3', '#80CAEE'],
    chart: {
        type: 'bar',
        height: 335,
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    responsive: [
        {
            breakpoint: 1536,
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 0,
                        columnWidth: '25%'
                    }
                }
            }
        }
    ],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 0,
            columnWidth: '25%',
            borderRadiusApplication: 'end',
            borderRadiusWhenStacked: 'last'
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        type: 'category',
        categories: state.value.labels
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        fontFamily: 'Satoshi',
        fontWeight: 500,
        fontSize: '14px',

        markers: {
            radius: 99
        }
    },
    fill: {
        opacity: 1  
    }
}