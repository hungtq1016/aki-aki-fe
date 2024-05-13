<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="px-2">
    <div class="p-5 bg-gray-50 rounded-xl">
      <div class="w-4/5 m-auto py-10">
        <div class="bg-transparent w-full pt-[100%] relative overflow-hidden rounded-full">
          <div
            class="absolute inset-0 block bg-no-repeat bg-cover bg-[50%]"
            :style="{ 'background-image': `url(${imageBuilderUrl(data.imageUrl)})` }"
          ></div>
        </div>
      </div>

      <h3 class="text-center text-cerulean-500 text-xl uppercase font-semibold mb-4">
        {{ data.title }}
      </h3>
      <div class="text-center text-gray-800">
        {{ data.desc }}
      </div>
      <div class="text-center mt-20">
        <router-link class="text-cerulean-400 underline" :to="'/others/' + data.slug">{{
          $t('content.more')
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { imageBuilderUrl } from '@/core/services/utils/util.string'
import type { TService } from '@/modules/admin-service/models/type'

defineProps<{
  data: TService
}>()
</script>
