<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="relative">
    <img class="relative z-0 w-full object-cover" :src="data.imageUrl" :alt="data.title" />
  </div>
</template>

<script setup lang="ts">
import type { TBanner } from '../models/type'

defineProps<{
  data: TBanner
}>()
</script>
