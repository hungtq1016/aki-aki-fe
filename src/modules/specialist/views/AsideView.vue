<template>
  <div class="flex flex-col gap-y-4">
    <AsideList v-for="data in asides" :key="data.title" :data="data" />
  </div>
</template>

<script setup lang="ts">
import AsideList from '../components/Aside.list.vue'
import { asides } from '../services/data/data'
</script>
