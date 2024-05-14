<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Flicking :options="customerOptions" :plugins="plugins">
    <div class="p-2" v-for="(data, index) in customers" :key="index">
      <img :src="data.imageUrl" class="h-40 object-cover w-full" />
    </div>
    <template #viewport>
      <span class="flicking-arrow-prev"></span>
      <span class="flicking-arrow-next"></span>
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
