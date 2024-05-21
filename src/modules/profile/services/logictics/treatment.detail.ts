import { ref } from 'vue'

import { get } from '@/core/services/helpers/request.helper'
import type { TTreatmentDetailResponse } from '@/modules/admin-treatment/models/type'

export const state = ref<TTreatmentDetailResponse[]>([])

export const fetch = async (month: number, id: string): Promise<boolean> => {
  const options = {treatId:id, month: month}
  await get<TTreatmentDetailResponse[]>('/api/treatmentdetails/client',options).then(response => {
    if (response?.data) {
        state.value = response.data
        return true
    }
    return false
  })
  return false
}