<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <li class="relative lg:flex lg:items-center lg:text-center lg:px-3 lg:h-full lg:py-7">
    <router-link
      :to="data.href"
      :class="`relative block w-full px-4 py-3 font-bold capitalize lg:w-auto lg:px-0 lg:py-0  
            ${isZero ? 'text-gray-500 focus:text-gray-600 hover:text-gray-600' : 'text-gray-600 focus:text-gray-700 hover:text-gray-700'}`"
    >
      {{ $t(data.title) }}
    </router-link>
  </li>
</template>

<script setup lang="ts">
import type { BaseINavigation } from '@/core/models/interface'

defineProps<{
  data: BaseINavigation
  isZero: Boolean
}>()
</script>

<style scoped>
.router-link-active.router-link-exact-active {
  @apply !text-cerulean-600;
}
</style>
