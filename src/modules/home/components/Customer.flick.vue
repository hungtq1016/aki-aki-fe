<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Flicking :options="customerOptions" :plugins="plugins">
    <div class="p-2" v-for="(data, index) in customers" :key="index">
      <img :src="imageBuilderUrl(data.imageUrl)" class="aspect-video object-contain w-full" />
    </div>
    <template #viewport>
      <span class="flicking-arrow-prev before:!bg-cerulean-600 before:hover:!bg-cerulean-500 after:!bg-cerulean-600 after:hover:!bg-cerulean-500"></span>
      <span class="flicking-arrow-next before:!bg-cerulean-600 before:hover:!bg-cerulean-500 after:!bg-cerulean-600 after:hover:!bg-cerulean-500"></span>
    </template>
  </Flicking>
</template>

<script setup lang="ts">
import '@egjs/flicking-plugins/dist/arrow.css'

import Flicking from '@egjs/vue3-flicking'
import { customers as data } from '../services/data/data'
import { Arrow } from '@egjs/flicking-plugins'
import { customerOptions } from '../services/data/options'
import { onMounted, ref } from 'vue'
import type { TGroupUrlResponse, TUrl } from '@/modules/admin-branch/models/type'
import { get } from '@/core/services/helpers/fetcher.helper'
import { imageBuilderUrl } from '@/core/services/utils/util.string'

const plugins = [new Arrow()]

const customers = ref<TUrl[]>(data.value)

onMounted(() => {
  get<TGroupUrlResponse>('/api/groupurls/label/customer').then((res) => {
    if (res?.data) {
      customers.value = res.data.urls
    }
  })
})
</script>
