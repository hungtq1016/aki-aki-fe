<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="px-5">
    <div>
      <div class="w-full pt-[70%] relative overflow-hidden bg-white rounded mb-2">
        <div
          class="bg-[50%] bg-cover bg-no-repeat absolute inset-0 block"
          :style="{ 'background-image': `url(${imageBuilderUrl(data.imageUrl)})` }"
        ></div>
      </div>
      <h3 class="text-center text-gray-600 capitalize">{{ data.label }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { imageBuilderUrl } from '@/core/services/utils/util.string';
import type { TUrl } from '@/modules/admin-branch/models/type';

defineProps<{
  data: TUrl
}>()
</script>
