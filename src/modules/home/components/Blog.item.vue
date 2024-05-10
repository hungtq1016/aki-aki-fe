<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="px-5">
    <div>
      <router-link :to="data.slug">
        <div class="w-full pt-[70%] relative overflow-hidden bg-white rounded mb-5">
          <div
            class="bg-image-show lazy_block bg-[50%] bg-cover bg-no-repeat absolute inset-0 block"
            :style="{ 'background-image': `url(${data.imageUrl})` }"
          ></div>
        </div>
      </router-link>
      <h3 class="text-center text-cerulean-500 text-base uppercase font-normal mb-4 line-clamp-2">
        {{ data.title }}
      </h3>
      <div class="text-justify text-gray-800 line-clamp-3">
        {{ data.desc }}
      </div>
      <div class="text-center mt-20">
        <router-link class="text-cerulean-400 underline" :to="data.slug">{{
          $t('content.more')
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TBlog } from '../models/type'

defineProps<{
  data: TBlog
}>()
</script>
