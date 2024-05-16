import { ref } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../data/schedule'
import { get } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TSchedule } from '../../models/type'

export const items = ref<TSchedule[]>([
  {
    id: v4(),
    date: new Date(),
    branchId: '-1',
    desc: '',
    fullName: '',
    phoneNumber: '',
    serviceId: '-1',
    time: "{\"hello\":\"world\"}",
    email: '-1',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    enable: true
  }
])

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {

  await get<TPaginationResponse<TSchedule>>(
    '/api/schedules/page',
    paginationOptions.value
  ).then(response => {
    if (response?.data) {
      const { data, ...page } = response.data
      items.value = data
      pagination.value = page
    }
  })
}