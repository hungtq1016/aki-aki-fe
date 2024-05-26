<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
// @ts-ignore
import VueApexCharts from 'vue3-apexcharts';
import ChartTabs from './Chart.tabs.vue';
import { apexOptions, state, timeperiod, fetch } from '../services/logictics/chart.one';
import { onMounted } from 'vue';

onMounted(async () => {
    await fetch();
});

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
            <p class="text-sm font-medium">{{ $t(`table.last${timeperiod}`) }}</p>
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
            <p class="text-sm font-medium">{{ $t(`table.current${timeperiod}`) }}</p>
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
          :series="state.series"
          ref="chart"
        />
      </div>
    </div>
  </div>
</template>
