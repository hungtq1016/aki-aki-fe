<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <li>
    <router-link :to="'/blogs/'+data.slug" class="flex py-4 gap-x-2">
      <ChevronRightIcon class="w-5 h-5 text-cerulean-600" />
      <span class="text-gray-600 capitalize">{{ $t(data.title) }}</span>
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/solid'
import type { TBlogAside } from '../models/type'

defineProps<{
  data: TBlogAside
}>()
</script>

<style scoped>
.router-link-active.router-link-exact-active {
  @apply !text-slate-950 font-bold;
}
.router-link-active.router-link-exact-active svg {
  @apply rotate-180;
}
</style>
