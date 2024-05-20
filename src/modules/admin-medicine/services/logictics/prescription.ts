import { ref, watch } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../data/prescription'
import { get } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TPrescription } from '../../models/type'
import { StatusEnum } from '@/core/models/enum'

export const items = ref<TPrescription[]>([
  {
    id: v4(),
    status: StatusEnum.Active,
    doctorId: '-1',
    patientId: '-1',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
  }
])

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  await get<TPaginationResponse<TPrescription>>('/api/prescriptions/page', paginationOptions.value).then(response => {
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
