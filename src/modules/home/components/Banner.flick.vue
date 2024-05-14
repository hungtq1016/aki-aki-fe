<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Flicking :options="bannerOptions">
    <BannerItem v-for="(data, index) in banners" :key="index" :data="data" />
  </Flicking>
</template>

<script setup lang="ts">
import BannerItem from '../components/Banner.item.vue'
import { banners as data } from '../services/data/data'
import Flicking from '@egjs/vue3-flicking'
import { bannerOptions } from '../services/data/options'
import { onMounted, ref } from 'vue'
import type { TGroupUrlResponse, TUrl } from '@/modules/admin-branch/models/type'
import { get } from '@/core/services/helpers/fetcher.helper'

const banners = ref<TUrl[]>(data.value)

onMounted(() => {
  get<TGroupUrlResponse>('/api/groupurls/label/banner').then((res) => {
    if (res?.data) {
      banners.value = res.data.urls
    }
  })
})
</script>
