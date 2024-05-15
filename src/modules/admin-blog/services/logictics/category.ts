import { ref, watch } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from './../data/category'

import { get } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TCategory } from '../../models/type'

export const items = ref<TCategory[]>([
  {
    id: v4(),
    title: 'mock-data',
    slug: 'mock-data',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    enable: true
  }
])

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  const response = await get<TPaginationResponse<TCategory>>(
    '/api/categories/page',
    paginationOptions.value
  )
  items.value = response?.data.data || []
  pagination.value = response?.data || { ...init_pagination };
}

watch(
  paginationOptions,
  async () => {
    await fetch()
  },
  { deep: true }
)
