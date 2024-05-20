import {  ref, watch } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../data/url'
import { get } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TUrl } from '../../models/type'
import { StatusEnum } from '@/core/models/enum'

export const items = ref<TUrl[]>([
  {
    id: v4(),
    label: 'mock-data',
    slug: 'mock-data',
    imageUrl: 'mock-data',
    type: '123',
    tag: '-1',
    groupId: '-1',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    status: StatusEnum.Active
  }
])

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  await get<TPaginationResponse<TUrl>>('/api/urls/page', paginationOptions.value).then(response => {
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
