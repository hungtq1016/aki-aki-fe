import { ref } from 'vue'

import { get } from '@/core/services/helpers/request.helper'

import type { TRecordResponse } from '../../models/type'

export const state = ref<TRecordResponse>({} as TRecordResponse)

export const fetch = async (id: string): Promise<boolean> => {
  await get<TRecordResponse>('/api/healthrecords/'+id).then(response => {
    if (response?.data) {
        state.value = response.data
        return true
    }
    return false
  })
  return false
}