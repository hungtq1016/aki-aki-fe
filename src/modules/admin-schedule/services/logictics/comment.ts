import { ref, watch } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../data/comment'

import { get } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import { EnableEnum } from '@/core/models/enum'
import type { TComment } from '@/modules/blog/models/type'

export const items = ref<TComment[]>([
  {
    id: v4(),
    content: 'mock-data',
    parentId: '-1',
    blogId: '-1',
    userId: '-1',
    children: [],
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    enable: Boolean(EnableEnum.ALL)
  }
])

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  const response = await get<TPaginationResponse<TComment>>(
    '/api/comments/page',
    paginationOptions.value
  )
  items.value = response?.data.data || []
}

watch(
  paginationOptions,
  async () => {
    await fetch()
  },
  { deep: true }
)
