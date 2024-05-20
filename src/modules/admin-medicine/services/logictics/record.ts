import { ref, watch } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../data/record'
import { get } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TRecord } from '../../models/type'
import { StatusEnum } from '@/core/models/enum'

export const items = ref<TRecord[]>([
  {
    id: v4(),
    status: StatusEnum.Active,
    birthDay: '',
    gender: '-1',
    address: '',
    height: 0,
    weight: 0,
    bloodPressure: 0,
    temperature: 37,
    heartBeat: 0,
    anamnesis: '',
    diagnosis: '',
    userId: '-1',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
  }
])

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  await get<TPaginationResponse<TRecord>>('/api/healthrecords/page', paginationOptions.value).then(response => {
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
