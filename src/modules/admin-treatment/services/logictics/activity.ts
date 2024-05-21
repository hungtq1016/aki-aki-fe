import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../data/activity'

import type { TActivity } from '../../models/type'
import { ref, watch } from 'vue'
import { StatusEnum } from '@/core/models/enum'
import type { TPagination, TPaginationResponse } from '@/core/models/type'
import { get } from '@/core/services/helpers/request.helper'

export const items = ref<TActivity[]>([
  {
    id: v4(),
    title: 'mock-data',
    description: '',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    status: StatusEnum.Active
  }
])

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  await get<TPaginationResponse<TActivity>>(
    '/api/activities/page',
    paginationOptions.value
  ).then(response => {
    if (response?.data) {
      const { data, ...page } = response.data
      items.value = data
      pagination.value = page
    }
  })
}

watch(
  paginationOptions,
  async () => {
    await fetch()
  },
  { deep: true }
)
