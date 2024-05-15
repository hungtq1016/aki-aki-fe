import { ref, watch } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../data/user'

import { get } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TUser } from '../../models/type'

export const items = ref<TUser[]>([
  {
    id: v4(),
    fullName: 'mock-data',
    email: 'mock-data',
    password: 'mock-data',
    address: 'mock-data',
    phoneNumber: 'mock-data',
    imageUrl: 'mock-data',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    enable: true
  }
])

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  get<TPaginationResponse<TUser>>('/api/users/role/customer/search', paginationOptions.value).then(response => {
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
