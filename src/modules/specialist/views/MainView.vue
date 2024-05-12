<template>
  <section class="py-10">
    <div class="max-w-screen-xl m-auto">
      <div class="flex gap-x-12 flex-row-reverse">
        <AsideView class="basis-1/5" />
        <ContentView class="basis-4/5" :key="route.path" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AsideView from './AsideView.vue'
import ContentView from './ContentView.vue'

import { useRoute } from 'vue-router'
const route = useRoute()
</script>
