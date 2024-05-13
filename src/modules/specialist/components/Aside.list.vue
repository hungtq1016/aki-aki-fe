<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <aside>
    <ul class="w-full p-0 m-0 overflow-hidden rounded">
      <li class="text-lg font-bold leading-5 text-white px-6 py-3.5 bg-cerulean-400 capitalize">
        {{ data.label }}
      </li>
      <AsideItem
        v-for="item in dataService"
        :key="item.title"
        :data="item"
        :parent-slug="'specialist'"
      />
    </ul>
  </aside>
</template>

<script setup lang="ts">
import type {
  TGroupService,
  TGroupServiceResponse,
  TService
} from '@/modules/admin-service/models/type'
import AsideItem from './Aside.item.vue'
import { onMounted, ref, type Ref } from 'vue'
import { get } from '@/core/services/helpers/fetcher.helper'

const props = defineProps<{
  data: TGroupService
}>()

const dataService: Ref<TService[]> = ref([])

onMounted(() => {
  get<TGroupServiceResponse>('/api/groupservices/label/' + props.data.label).then((res) => {
    if (res?.data) {
      const { services } = res.data
      dataService.value = services
    }
  })
})
</script>
