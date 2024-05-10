<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Flicking :options="bannerOptions">
    <BannerItem v-for="(data, index) in banners" :key="index" :data="data" />
  </Flicking>
</template>

<script setup lang="ts">
import BannerItem from '../components/Banner.item.vue'
import { banners } from '../services/data/data'
import Flicking from '@egjs/vue3-flicking'
import { bannerOptions } from '../services/data/options'
</script>
