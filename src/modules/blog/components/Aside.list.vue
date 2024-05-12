<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <aside>
    <ul class="pl-2">
      <AsideItem :data="all" />
      <AsideItem v-for="data in aside" :key="data.title" :data="data" />
    </ul>
  </aside>
</template>

<script setup lang="ts">
import AsideItem from './Aside.item.vue'
import { categories as data } from '../services/data/data'
import { onMounted, ref, type Ref } from 'vue';
import type { TCategory } from '@/modules/admin-blog/models/type';
import { get } from '@/core/services/helpers/fetcher.helper';

const all = {
  title: 'route.blogs',
  slug: '',
  createdAt: '',
  updatedAt: '',
  enable: true,
  id: '1'
}

const aside: Ref<TCategory[]> = ref(data.value)

onMounted(() => {
  get<TCategory[]>('/api/categories').then(res => {
    if (res?.data) {
      aside.value = res.data
    }
  })
})
</script>
