<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <li class="text-white">
    <div class="flex gap-x-4 items-center">
      <img :src="data.imageUrl" class="w-8 h-8" />
      <a :href="`${data.type}${data.slug}`" class="uppercase text-[22px] relative">
        {{ data.label }}
      </a>
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { TUrl } from '@/modules/admin-branch/models/type';

defineProps<{
  data: TUrl
}>()
</script>
