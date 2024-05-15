<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 md:py-10 md:px-5">
    <Flicking :options="defaultOption" :plugins="plugins">
      <ServiceItem v-for="(data, index) in services" :key="index" :data="data" />
      <template #viewport>
        <span class="flicking-arrow-prev before:!bg-cerulean-600 before:hover:!bg-cerulean-500 after:!bg-cerulean-600 after:hover:!bg-cerulean-500"></span>
        <span class="flicking-arrow-next before:!bg-cerulean-600 before:hover:!bg-cerulean-500 after:!bg-cerulean-600 after:hover:!bg-cerulean-500"></span>
      </template>
    </Flicking>
  </div>
</template>

<script setup lang="ts">
import '@egjs/flicking-plugins/dist/arrow.css'

import Flicking from '@egjs/vue3-flicking'
import ServiceItem from './Service.item.vue'
import { Arrow } from '@egjs/flicking-plugins'
import { defaultOption } from '@/core/services/data/options'
import { services as data } from '../services/data/data'
import { onMounted, ref } from 'vue'
import type { TService } from '@/modules/admin-service/models/type'
import { get } from '@/core/services/helpers/fetcher.helper'
import type { TPaginationResponse } from '@/core/models/type'

const plugins = [new Arrow()]

const services = ref<TService[]>(data.value)

onMounted(() => {
  get<TPaginationResponse<TService>>('/api/services/group/dich-vu?pageNumber=1&pageSize=6&enable=1').then(
    (res) => {
      if (res?.data) {
        services.value = res.data.data
      }
    }
  )
})
</script>
