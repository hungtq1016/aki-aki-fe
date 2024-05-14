<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <li class="text-white">
    <div 
    :class="{'router':data.tag === 'router'}"
    class="flex gap-x-1 items-center p-2 border border-cerulean-900 rounded-md">
      <component :is="data.icon" class="w-6 h-6 text-cerulean-900 m-1" />
      <router-link
        v-if="data.tag === 'router'"
        :to="`${data.type}${data.url}`"
        class="uppercase text-lg relative pr-4 font-semibold"
      >
        <span class="text-cerulean-50">{{ $t(data.label) }}</span>
      </router-link>
      <a
        v-else
        class="uppercase text-lg relative pr-4 font-semibold"
        :href="`${data.type}${data.url}`"
      >
        <span class="text-cerulean-900">{{ data.label }}</span>
      </a>
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { TContact } from '../models/type'

defineProps<{
  data: TContact
}>()
</script>

<style scoped>
.router{
  @apply bg-cerulean-900
}

.router > *{
  @apply text-cerulean-50
}
</style>