<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 md:py-10 md:px-5">
    <Flicking :options="defaultOption" :plugins="plugins">
      <ServiceItem v-for="(data, index) in services" :key="index" :data="data" />
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
import ServiceItem from './Service.item.vue'
import { Arrow } from '@egjs/flicking-plugins'
import { defaultOption } from '@/core/services/data/options'
import { services as data } from '../services/data/data'
import { onMounted, ref } from 'vue'
import type { TGroupServiceResponse, TService } from '@/modules/admin-service/models/type'
import { get } from '@/core/services/helpers/request.helper'

const plugins = [new Arrow()]

const services = ref<TService[]>(data.value)

onMounted(()=>{
  get<TGroupServiceResponse>('/api/groupservices/label/other').then(res=>{
    if (res?.data) {
      services.value = res.data.services
    }
  })
})
</script>
