import { ref, type Ref } from 'vue'

import { get, put } from '@/core/services/helpers/request.helper'
import { successNotification } from '@/core/services/helpers/alert.helper'

import type { TPermission } from '../../models/type'

export const state: Ref<TPermission> = ref({} as TPermission)

export const fetch = async (id: string): Promise<void> => {
  get<TPermission>('/api/permissions/' + id).then((response) => {
    if (response?.data) {
      state.value = response.data
    }
  })
}

export const submit = async () => {
  const data = await put<any, any>('/api/permissions/' + state.value.id, state.value)
  if (data?.data) {
    successNotification(data.message)
  }
}
