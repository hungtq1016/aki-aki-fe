import { ref, watch } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions, type TClientRequest } from '../data/invoice'
import { get } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TInvoice } from '../../models/type'

export const items = ref<TInvoice[]>([
  {
    id: v4(),
    enable: true,
    total: 0,
    tax: 0,
    patientId: '-1',
    nurseId: '-1',
    healthRecordId: '-1',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
  }
])

export const state = ref({}as TClientRequest)
export const userId = ref('')
export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  const options = {...paginationOptions.value, ...state.value}
  await get<TPaginationResponse<TInvoice>>('/api/invoices/user/'+userId.value, options).then(response => {
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
