import { ref } from 'vue'

import { get, put } from "@/core/services/helpers/request.helper"
import { successNotification } from '@/core/services/helpers/alert.helper'

import type { TGroupUrlResponse } from "../../models/type"
import type { Ref } from "vue"

export const state: Ref<TGroupUrlResponse> = ref({} as TGroupUrlResponse)

export const fetchGroups = async (id: string): Promise<void> => {
  get<TGroupUrlResponse>('/api/groupurls/' + id).then((response) => {
    if (response?.data) {
      state.value = response.data
    }
  })
}

export const update = async () => {
  const data = await put<any, any>('/api/groupurls/' + state.value.id, state.value)
  if (data?.data) {
    successNotification(data.message)
  }
}