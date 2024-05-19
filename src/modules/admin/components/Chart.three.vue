<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

// @ts-ignore
import VueApexCharts from 'vue3-apexcharts'
import { apexOptions, state, fetch, categories, timeperiod, total } from '../services/logictics/chart.three';
import { onMounted } from 'vue';

onMounted(async()=>{
  await fetch()
})

</script>

<template>
  <div
    class="col-span-12 rounded-sm border border-zumthor-100 bg-white px-5 pt-[30px] pb-5 shadow-default dark:border-oxford-blue-900 dark:bg-zinc-950 sm:px-[30px] xl:col-span-6"
  >
    <div class="mb-3 justify-between gap-4 sm:flex">
      <div>
   
        <h4 class="text-xl font-bold text-slate-950 dark:text-white">Visitors Analytics</h4>
      </div>
      <div>
        <div class="relative z-20 inline-block">
          <select v-model="timeperiod" @change="fetch"
            class="relative z-20 inline-flex bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
          >
            <option             v-for="category in categories" :key="category"
            :value="category">{{category}}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="mb-2">
      <div id="chartThree" class="mx-auto flex justify-center">
        <VueApexCharts
          type="donut"
          width="340"
          :options="apexOptions"
          :series="state.series"
          ref="chart"
        />
      </div>
    </div>
    <div class="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
      <div class="w-full px-8 sm:w-1/2" v-for="(label,index) in state.labels" :key="label">
        <div class="flex w-full items-center">
          <span class="mr-2 block h-3 w-full max-w-3 rounded-full bg-cerulean-600"></span>
          <p class="flex w-full justify-between text-sm font-medium text-slate-950 dark:text-white">
            <span> {{label}} </span>
            <span> {{ (state.series[index]/total*100).toFixed(2) }} %</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
