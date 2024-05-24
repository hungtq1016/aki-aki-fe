<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { permissions,checkPermission } from '@/core/services/hooks/usePermission';
import type { TMenuItem } from '../models/type'
import { computed } from 'vue';

const props = defineProps<{
  item: TMenuItem
}>()
const show = computed(()=>{
  return permissions.value.find(data => data.value === props.item.label.split('.')[1] || (data.type === 'admin' && data.value === 'all'));
})

</script>

<template>
<li v-if="show">
        <router-link
          :to="item.slug"
          class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-regent-gray-600 duration-300 ease-in-out hover:text-white"
        >
          {{ $t(item.label) }}
        </router-link>
      </li>
</template>

<style scoped>
.router-link-active.router-link-exact-active {
  @apply text-white;
}
</style>
