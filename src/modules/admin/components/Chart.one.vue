<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { get } from '@/core/services/helpers/request.helper';
import { onMounted, ref, watch } from 'vue';
// @ts-ignore
import VueApexCharts from 'vue3-apexcharts';
import ChartTabs from './Chart.tabs.vue';

type InputFormat = {
  last: { [key: string]: number };
  current: { [key: string]: number };
};

type OutputFormat = {
  series: Array<{
    name: string;
    data: number[];
  }>;
  labels: string[];
};

const highestValue = ref(40);

const transformData = (input: InputFormat): OutputFormat => {
  const lastData = Object.values(input.last);
  const currentData = Object.values(input.current);
  const labels = Object.keys(input.last);

  highestValue.value = Math.max(...lastData, ...currentData);

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

const state = ref<InputFormat>({
  current:{},
  last:{}
} as InputFormat);
const chartData = ref(transformData(state.value));

const chart = ref(null);

const apexOptions = ref({
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
    categories: chartData.value.labels,
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

const timeperiod = ref('week');

const fetch = async () => {
  await get<InputFormat>('/api/invoices/total-count', { timeperiod: timeperiod.value }).then(response => {
    if (response?.data) {
      state.value = response.data;
    }
  });
};

onMounted(async () => {
  await fetch();
});

watch(state, (newValue) => {
  chartData.value = transformData(newValue);
}, { deep: true });

watch(timeperiod, async() => {
  await fetch()
}, { deep: true });

</script>

<template>
  <div
    class="col-span-12 rounded-sm border border-zumthor-100 bg-white px-5 pt-[30px] pb-5 shadow-default dark:border-oxford-blue-900 dark:bg-zinc-950 sm:px-[30px]"
  >
    <div class="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
      <div class="flex w-full flex-wrap gap-3 sm:gap-5">
        <div class="flex min-w-[190px]">
          <span
            class="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-cerulean-600"
          >
            <span class="block h-2.5 w-full max-w-2.5 rounded-full bg-cerulean-600"></span>
          </span>
          <div class="w-full">
            <p class="font-semibold text-cerulean-600">Hóa đơn</p>
            <p class="text-sm font-medium">Tuần trước</p>
          </div>
        </div>
        <div class="flex min-w-[190px]">
          <span
            class="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-cerulean-300"
          >
            <span class="block h-2.5 w-full max-w-2.5 rounded-full bg-cerulean-300"></span>
          </span>
          <div class="w-full">
            <p class="font-semibold text-cerulean-300">Hóa đơn</p>
            <p class="text-sm font-medium">Tuần này</p>
          </div>
        </div>
      </div>

      <div class="flex w-full max-w-45 justify-end">
        <ChartTabs v-model="timeperiod"/>
      </div>
    </div>
    <div>
      <div class="-ml-5">
        <VueApexCharts
          type="area"
          height="350"
          :options="apexOptions"
          :series="chartData.series"
          ref="chart"
        />
      </div>
    </div>
  </div>
</template>
