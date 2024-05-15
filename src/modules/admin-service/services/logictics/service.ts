import { ref, watch } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from './../data/service'

import { get, } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'

import type { TService } from '../../models/type'


export const items = ref<TService[]>([
  {
    id: v4(),
    title: 'mock-data',
    groupId: 'mock-data',
    imageUrl: '',
    content: 'mock-data',
    slug: '',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    videoEmbed: '',
    desc: '',
    enable: true
  }
])

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  await get<TPaginationResponse<TService>>(
    '/api/services/page',
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