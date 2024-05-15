import { ref } from 'vue'

import { successNotification } from "@/core/services/helpers/alert.helper"
import { get, put } from "@/core/services/helpers/request.helper"

import type { Ref } from "vue"
import type { TMedicine } from "../../models/type"

export const state: Ref<TMedicine> = ref({} as TMedicine)

export const fetch = async (id: string): Promise<void> => {
  get<TMedicine>('/api/medicines/' + id).then((response) => {
    if (response?.data) {
      state.value = response.data
    }
  })
}

export const submit = async () => {
  const data = await put<any, any>('/api/medicines/' + state.value.id, state.value)
  if (data?.data) {
    successNotification(data.message)
  }
}