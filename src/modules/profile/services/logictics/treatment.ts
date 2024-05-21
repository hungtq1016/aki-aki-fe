import { ref, watch } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions, type TClientRequest } from '../data/treatment'
import { get } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import { StatusEnum } from '@/core/models/enum'
import type { TTreatmentPlant } from '@/modules/admin-treatment/models/type'

export const items = ref<TTreatmentPlant[]>([
  {
    id: v4(),
    status: StatusEnum.Active,
    title: '',
    description: '',
    patientId: '',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
  }
])

export const state = ref({}as TClientRequest)
export const userId = ref('')
export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  const options = {...paginationOptions.value, ...state.value}
  await get<TPaginationResponse<TTreatmentPlant>>('/api/treatmentplants/search/'+userId.value, options).then(response => {
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
