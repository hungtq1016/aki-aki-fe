<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { TMenuItem } from '../models/type'

defineProps<{
  items: TMenuItem[]
}>()
</script>

<template>
  <ul class="mt-4 mb-[22px] flex flex-col gap-2.5 pl-6">
    <template v-for="(childItem, index) in items" :key="index">
      <li v-if="childItem.show">
        <router-link
          :to="childItem.slug"
          class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-regent-gray-600 duration-300 ease-in-out hover:text-white"
        >
          {{ $t(childItem.label) }}
        </router-link>
      </li>
    </template>
  </ul>
</template>

<style scoped>
.router-link-active.router-link-exact-active {
  @apply text-white;
}
</style>
