<template>
  <BlogList :data="data" :blogs="blogs"/>
  <BlogPagination />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import BlogList from '../components/Blog.list.vue'
import { onMounted, ref, type Ref } from 'vue'
import BlogPagination from '../components/Blog.pagination.vue'
import { get } from '@/core/services/helpers/fetcher.helper'
import type { TBlog, TCategoryResponse } from '@/modules/admin-blog/models/type'
import type { TPaginationResponse } from '@/core/models/type'

const route = useRoute()

const blogs: Ref<TBlog[]> = ref([])
const data: Ref<TCategoryResponse> = ref({} as TCategoryResponse)

onMounted(()=>{
  get<TPaginationResponse<TBlog>>(`/api/blogs/category/${route.params.slug}`).then(res=>{
    if (res?.data) {
      blogs.value = res.data.data
    }
  })

  get<TCategoryResponse>(`/api/categories/slug/${route.params.slug}`).then(res=>{
    if (res?.data) {
      data.value = res.data
    }
  })
})
</script>
