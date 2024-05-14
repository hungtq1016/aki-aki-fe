<template>
  <div class="flex gap-y-4 flex-col-reverse justify-end">
    <AsideList v-for="data in groups" :key="data.id" :data="data" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import AsideList from '../components/Aside.list.vue'
import type { TGroupService } from '@/modules/admin-service/models/type'
import { get } from '@/core/services/helpers/fetcher.helper'

const groups: Ref<TGroupService[]> = ref([])

onMounted(() => {
  get<TGroupService[]>('/api/groupservices').then((res) => {
    if (res?.data) {
      groups.value = res.data
    }
  })
})
</script>
