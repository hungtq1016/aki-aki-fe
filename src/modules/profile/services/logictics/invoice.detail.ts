import { ref } from 'vue'

import { get } from '@/core/services/helpers/request.helper'

import type { TInvoiceResponse } from '../../models/type'

export const state = ref<TInvoiceResponse>({} as TInvoiceResponse)

export const fetch = async (id: string): Promise<boolean> => {
  await get<TInvoiceResponse>('/api/invoices/'+id).then(response => {
    if (response?.data) {
        state.value = response.data
        return true
    }
    return false
  })
  return false
}