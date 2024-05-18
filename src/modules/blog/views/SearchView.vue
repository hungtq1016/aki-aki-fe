<template>
  <div class="text-lg">
    <span class="font-medium">{{ $t('content.search_result') }}:</span>
    <span class="text-gray-600">{{ route.query.q }}</span>
  </div>

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
import { EnableEnum } from '@/core/models/enum'
import { i18n } from '@/core/services/base/translation'

const route = useRoute()

const blogs: Ref<TBlog[]> = ref([])
const data: Ref<TCategoryResponse> = ref({
  blogs: [],
  createdAt: '',
  enable: true,
  id: '',
  slug: 'search',
  title: 'search',
  updatedAt: ''
})

const paginationOptions = ref<TPaginationRequest>({
  pageNumber: 1,
  pageSize: 12,
  enable: EnableEnum.ALL
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
    `/api/blogs/search`,
    {...paginationOptions.value,value:route.query.q}
  )

  if (response?.data) {
    const { data, ...page } = response.data
    blogs.value = data
    pagination.value = page
  }
}

onMounted(async () => {
  await fetch()
})

</script>
