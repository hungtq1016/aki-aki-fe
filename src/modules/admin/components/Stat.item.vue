<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Card Item Start -->
  <div
    class="rounded-sm border border-zumthor-100 bg-white py-6 px-[30px] shadow-default dark:border-oxford-blue-900 dark:bg-zinc-950"
  >
    <div
      class="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-athens-gray-50 dark:bg-oxford-blue-900"
      v-html="data.icon"
    ></div>

    <div class="mt-4 flex items-end justify-between">
      <div>
        <h4 class="text-title-md font-bold text-slate-950 dark:text-white">{{ data.total }}</h4>
        <span class="text-sm font-medium">{{ data.title }}</span>
      </div>

      <span
        class="flex items-center gap-1 text-sm font-medium"
        :class="{ 'text-green-500': data.growthRate > 0, 'text-cerulean-500': data.growthRate < 0 }"
      >
        {{ data.growthRate }}%
        <svg
          v-if="data.growthRate > 0"
          class="fill-green-500"
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
            fill=""
          />
        </svg>

        <svg
          v-if="data.growthRate < 0"
          class="fill-cerulean-500"
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
            fill=""
          />
        </svg>
      </span>
    </div>
  </div>
  <!-- Card Item End -->
</template>
<script setup lang="ts">
import type { TStat } from '../models/type'

defineProps<{
  data: TStat
}>()
</script>
