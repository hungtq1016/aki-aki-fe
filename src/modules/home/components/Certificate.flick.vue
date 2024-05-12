<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 md:py-10 md:px-5">
    <Flicking :options="slickOptions" :plugins="plugins">
      <CertificateItem v-for="(data, index) in certificates" :key="index" :data="data" />
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
import { certificates as data } from '../services/data/data'
import { Arrow } from '@egjs/flicking-plugins'
import { slickOptions } from '../services/data/options'
import CertificateItem from './Certificate.item.vue'
import { onMounted, ref } from 'vue'
import type { TUrl, TGroupUrlReponse } from '@/modules/admin-branch/models/type'
import { get } from '@/core/services/helpers/request.helper'

const plugins = [new Arrow()]

const certificates = ref<TUrl[]>(data.value)

onMounted(()=>{
  get<TGroupUrlReponse>('/api/groupurls/label/certificate').then(res=>{
    if (res?.data) {
      certificates.value = res.data.urls
    }
  })
})
</script>
