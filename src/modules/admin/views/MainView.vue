<script setup lang="ts">
import ChartView from './ChartView.vue'
import StatView from './StatView.vue'
</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-[30px]">
    <StatView />
  </div>

  <div class="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-[30px] 2xl:gap-[30px]">
    <ChartView />

  </div>
</template>
