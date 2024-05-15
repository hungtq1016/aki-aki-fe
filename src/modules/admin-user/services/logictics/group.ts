import { ref } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../../../admin-user/services/data/group'
import { get } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TGroup } from '../../models/type'

export const items = ref<TGroup[]>([
  {
    id: v4(),
    roleId: 'mock-data',
    userId: 'mock-data',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    enable: true
  }
])

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  await get<TPaginationResponse<TGroup>>(
    '/api/groups/page',
    paginationOptions.value
  ).then(response => {
    if (response?.data) {
      const { data, ...page } = response.data
      items.value = data
      pagination.value = page
    }
  })
}