<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <li class="text-gray-50">
    <div class="flex gap-x-4 items-center">
      <img :src="imageBuilderUrl(data.imageUrl)" class="w-8 h-8 logo-img" />
      <a :href="`${data.type}${data.slug}`" class="uppercase text-[22px] relative">
        {{ data.label }}
      </a>
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { TUrl } from '@/modules/admin-branch/models/type'
import { imageBuilderUrl } from '@/core/services/utils/util.string';

defineProps<{
  data: TUrl
}>()
</script>

<style scoped>
.logo-img {
  filter: invert(1);
  filter: invert(1) sepia(1) saturate(5) hue-rotate(175deg);
}


</style>