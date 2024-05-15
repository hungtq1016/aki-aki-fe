import { ref, type Ref } from 'vue'

import { get, put } from '@/core/services/helpers/request.helper'
import { successNotification } from '@/core/services/helpers/alert.helper'

import type { TRole } from '../../models/type'

export const state: Ref<TRole> = ref({} as TRole)

export const fetch = async (id: string): Promise<void> => {
  get<TRole>('/api/roles/' + id).then((response) => {
    if (response?.data) {
      state.value = response.data
    }
  })
}

export const submit = async () => {
  const data = await put<any, any>('/api/roles/' + state.value.id, state.value)
  if (data?.data) {
    successNotification(data.message)
  }
}
