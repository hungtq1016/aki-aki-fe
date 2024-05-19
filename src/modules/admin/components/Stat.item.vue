<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Card Item Start -->
  <div
    class="rounded-sm border border-zumthor-100 bg-white py-6 px-[30px] shadow dark:border-oxford-blue-900 dark:bg-zinc-950">
    <div class="flex justify-between flex-wrap">
      <component :is="data.icon" class="w-12 h-12 text-cerulean-600"/>
      <select v-model="stat.default" @change="fetch"
        class="relative z-20 inline-flex bg-transparent py-1 text-sm font-medium outline-none">
        <option v-for="option in options" :key="option.value"
        :value="option.value">{{option.label}}</option>
      </select>
    </div>
    <div class="mt-4 flex items-end justify-between">
      <div>
        <h4 class="text-title-md font-bold text-slate-950 dark:text-white">{{ data.format ? currency(state): state }}</h4>
        <span class="text-sm font-medium">{{ data.label }}</span>
      </div>

      <span class="flex items-center gap-1 text-sm font-medium"
        :class="{ 'text-green-500': grow > 0, 'text-cerulean-500': grow < 0 }">
        {{ grow }}%
        
        <svg v-if="grow > 0" class="fill-green-500" width="10" height="11" viewBox="0 0 10 11" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
            fill="" />
        </svg>

        <svg v-if="grow < 0" class="fill-cerulean-500" width="10" height="11" viewBox="0 0 10 11" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
            fill="" />
        </svg>
      </span>
    </div>
  </div>
  <!-- Card Item End -->
</template>
<script setup lang="ts">
import { get } from '@/core/services/helpers/fetcher.helper';
import type { TStat } from '../models/type'
import { onMounted, ref, watch } from 'vue';
import { currency } from '@/core/services/utils/util.number';
const grow = 0
const props = defineProps<{
  data: TStat
}>()

const options = [
    {
        value: 'lastday',
        label: 'Yesterday'
    },
    {
        value: 'currentday',
        label: 'Today'
    },
    {
        value: 'lastweek',
        label: 'Last week'
    },
    {
        value: 'currentweek',
        label: 'Current week'
    },
    {
        value: 'lastmonth',
        label: 'Last month'
    },
    {
        value: 'currentmonth',
        label: 'Current month'
    },
    {
        value: 'lastquarter',
        label: 'Last quarter'
    },
    {
        value: 'currentquarter',
        label: 'Current quarter'
    },
    {
        value: 'lastyear',
        label: 'Last year'
    },
    {
        value: 'currentyear',
        label: 'Current year'
    },
    {
        value: 'all',
        label: 'All'
    }
];

const stat = ref<TStat>(props.data)
const state = ref<number>(0)

const fetch = async () => {
    await get<number>(props.data.slug,{timeperiod:props.data.default}).then(response => {
      if (response?.data) {
        state.value = response.data
      }
    })
}

watch(props.data,(newValue)=>{
  stat.value = newValue
},{deep:true})

onMounted(async()=>{
  await fetch()
})
</script>
