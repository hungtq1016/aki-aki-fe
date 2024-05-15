import { ref } from 'vue'

import { get, put } from "@/core/services/helpers/request.helper"
import { successNotification } from "@/core/services/helpers/alert.helper"

import type { Ref } from "vue"
import type { TBranchTypeResponse } from "../../models/type"

export const state: Ref<TBranchTypeResponse> = ref({} as TBranchTypeResponse)

export const fetch = async (id: string): Promise<void> => {
  get<TBranchTypeResponse>('/api/branchtypes/' + id).then((response) => {
    if (response?.data) {
      state.value = response.data
    }
  })
}

export const submit = async () => {
  const data = await put<any, any>('/api/branchtypes/' + state.value.id, state.value)
  if (data?.data) {
    successNotification(data.message)
  }
}