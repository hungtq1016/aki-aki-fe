<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="flex flex-col items-center px-6 text-center sm:text-left sm:flex-row sm:px-0 about-item js-hover"
  >
    <div class="w-40 sm:w-60 min-w-40 sm:min-w-60">
      <router-link :to="data.slug">
        <img
          class="w-40 h-40 sm:w-60 sm:h-60 transition-all rounded-full object-cover"
          :src="imageBuilderUrl(data.imageUrl)"
          :alt="data.label"
        />
      </router-link>
    </div>
    <div class="flex flex-col ml-0 text-left sm:ml-6">
      <!-- <component :is="data.icon" class="mt-4 sm:w-9 sm:m-0 text-cerulean-600" /> -->
      <router-link
        :to="data.slug"
        class="mt-2 text-xs text-gray-600 sm:mt-4 sm:text-sm text-justify line-clamp-3"
      >
        {{ data.label }}
      </router-link>
      <!-- <p class="mt-2 text-xs text-gray-600 sm:mt-4 sm:text-sm text-justify line-clamp-3">
        {{ data.label }}
      </p> -->
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
