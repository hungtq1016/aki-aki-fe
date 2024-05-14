<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mt-5">
    <Flicking :options="galleryOptions" :plugins="plugins">
      <div class="p-2" v-for="(data, index) in galleries" :key="index">
        <img
          :src="imageBuilderUrl(data.imageUrl)"
          :alt="data.label"
          class="h-40 object-cover w-full"
        />
      </div>
      <template #viewport>
        <span class="flicking-arrow-prev"></span>
        <span class="flicking-arrow-next"></span>
      </template>
    </Flicking>
  </div>
</template>

<script setup lang="ts">
import '@egjs/flicking-plugins/dist/arrow.css'

import Flicking from '@egjs/vue3-flicking'
import { galleries as data } from '../services/data/data'
import { Arrow } from '@egjs/flicking-plugins'
import { galleryOptions } from '../services/data/options'
import { onMounted, ref } from 'vue'
import type { TUrl, TGroupUrlResponse } from '@/modules/admin-branch/models/type'
import { imageBuilderUrl } from '@/core/services/utils/util.string'
import { get } from '@/core/services/helpers/fetcher.helper'

const plugins = [new Arrow()]

const galleries = ref<TUrl[]>(data.value)

onMounted(() => {
  get<TGroupUrlResponse>('/api/groupurls/label/gallery').then((res) => {
    if (res?.data) {
      galleries.value = res.data.urls
    }
  })
})
</script>
