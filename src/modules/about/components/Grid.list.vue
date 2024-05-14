<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
    <GridItem v-for="data in galleries" :key="data.id" :data="data" />
  </div>
</template>

<script setup lang="ts">
import GridItem from './Grid.item.vue'
import { onMounted, ref } from 'vue';
import type { TGroupUrlResponse, TUrl } from '@/modules/admin-branch/models/type';
import { get } from '@/core/services/helpers/fetcher.helper';

const galleries = ref<TUrl[]>([])

onMounted(() => {
  get<TGroupUrlResponse>('/api/groupurls/label/about').then((res) => {
    if (res?.data) {
      galleries.value = res.data.urls
    }
  })
})

</script>
