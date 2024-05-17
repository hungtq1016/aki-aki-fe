import { ref, watch } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../data/invoice'
import { get } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TInvoice } from '../../models/type'

export const items = ref<TInvoice[]>([
  {
    id: v4(),
    healthRecordId: '-1',
    nurseId: '-1',
    patientId: '-1',
    tax: 0,
    total: 0,
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    enable: true
  }
])

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  await get<TPaginationResponse<TInvoice>>('/api/invoices/page', paginationOptions.value).then(response => {
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
