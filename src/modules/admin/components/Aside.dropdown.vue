<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { TMenuItem } from '../models/type'
import AsideDropdownItem from './Aside.dropdown.item.vue';

defineProps<{
  items: TMenuItem[]
}>()

</script>

<template>
  <ul class="mt-4 mb-[22px] flex flex-col gap-2.5 pl-6">
    <AsideDropdownItem v-for="(childItem, index) in items" :key="index" :item="childItem"/>
  </ul>
</template>

<style scoped>
.router-link-active.router-link-exact-active {
  @apply text-white;
}
</style>
