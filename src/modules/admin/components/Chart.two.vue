<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
// @ts-ignore
import VueApexCharts from 'vue3-apexcharts'
import { apexOptions, categories, fetch, state, timeperiod } from '../services/logictics/chart.two';
import { onMounted } from 'vue';

onMounted(async()=>{
  await fetch()
})

</script>

<template>
  <div
    class="col-span-12 rounded-sm border border-zumthor-100 bg-white p-[30px] shadow-default dark:border-oxford-blue-900 dark:bg-zinc-950 xl:col-span-6"
  >
    <div class="mb-4 justify-between gap-4 sm:flex">
      <div>
        <h4 class="text-xl font-bold text-slate-950 dark:text-white">Total of invoice</h4>
      </div>
      <div>
        <div class="relative z-20 inline-block">
          <select v-model="timeperiod" @change="fetch"
            class="relative z-20 inline-flex bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
          >
            <option v-for="category in categories" :key="category.value"
            :value="category.value">{{$t(category.label)}}</option>
          </select>
        </div>
      </div>
    </div>

    <div>
      <div id="chartTwo" class="-ml-5 -mb-9">
        <VueApexCharts
          type="bar"
          height="335"
          :options="apexOptions"
          :series="state.series"
        />
      </div>
    </div>
  </div>
</template>
