import { ref } from 'vue'

import { get, put } from "@/core/services/helpers/request.helper"
import { successNotification } from '@/core/services/helpers/alert.helper'

import type { TUrlResponse } from "../../models/type"
import type { Ref } from "vue"

export const state: Ref<TUrlResponse> = ref({} as TUrlResponse)

export const fetch = async (id: string): Promise<void> => {
  get<TUrlResponse>('/api/urls/' + id).then((response) => {
    if (response?.data) {
      state.value = response.data
    }
  })
}

export const submit = async () => {
  const data = await put<any, any>('/api/urls/' + state.value.id, state.value)
  if (data?.data) {
    successNotification(data.message)
  }
}