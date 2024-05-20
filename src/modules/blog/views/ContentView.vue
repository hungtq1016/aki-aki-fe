<template>
  <BlogList :data="data" :blogs="blogs" />
  <BlogPagination v-bind="{ pagination, paginationOptions }" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import BlogList from '../components/Blog.list.vue'
import { onMounted, ref, watch, type Ref } from 'vue'
import BlogPagination from '../components/Blog.pagination.vue'
import { get } from '@/core/services/helpers/fetcher.helper'
import type { TBlog, TCategoryResponse } from '@/modules/admin-blog/models/type'
import type { TPagination, TPaginationRequest, TPaginationResponse } from '@/core/models/type'
import { StatusEnum } from '@/core/models/enum'

const route = useRoute()

const blogs: Ref<TBlog[]> = ref([])
const data: Ref<TCategoryResponse> = ref({} as TCategoryResponse)

const paginationOptions = ref<TPaginationRequest>({
  pageNumber: 1,
  pageSize: 12,
  status: StatusEnum.Active
})

const init_pagination: TPagination = {
  pageNumber: 1,
  pageSize: 10,
  firstPage: 1,
  lastPage: 1,
  totalPages: 0,
  totalRecords: 0,
  nextPage: 1,
  previousPage: 1
}

const pagination = ref<TPagination>({ ...init_pagination })

watch(
  paginationOptions,
  async () => {
    await fetch()
  },
  { deep: true }
)

const fetch = async () => {
  const response = await get<TPaginationResponse<TBlog>>(
    `/api/blogs/category/${route.params.slug}`,
    paginationOptions.value
  )

  if (response?.data) {
    const { data, ...page } = response.data
    blogs.value = data
    pagination.value = page
  }
}

onMounted(async () => {
  await fetch()

  get<TCategoryResponse>(`/api/categories/slug/${route.params.slug}`).then((res) => {
    if (res?.data) {
      data.value = res.data
    }
  })
})

watch(()=>route.fullPath,async()=>{
  get<TCategoryResponse>(`/api/categories/slug/${route.params.slug}`).then((res) => {
    if (res?.data) {
      data.value = res.data
    }
  })
  await fetch()
})
</script>
