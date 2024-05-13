<template>
  <BlogList
    v-for="data in categories"
    :key="data.id"
    :data="data"
    :blogs="data.blogs.slice(0, 3)"
  />
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import BlogList from '../components/Blog.list.vue'
import type { TCategoryResponse } from '@/modules/admin-blog/models/type'
import { get } from '@/core/services/helpers/fetcher.helper'

const categories: Ref<TCategoryResponse[]> = ref([])

onMounted(() => {
  get<TCategoryResponse[]>(`/api/categories/blogs`).then((res) => {
    if (res?.data) {
      categories.value = res.data
    }
  })
})
</script>
