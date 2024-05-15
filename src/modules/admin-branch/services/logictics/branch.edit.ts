import { ref } from 'vue'

import { successNotification } from "@/core/services/helpers/alert.helper"
import { get, put } from "@/core/services/helpers/request.helper"

import type { Ref } from "vue"
import type { TBranchResponse } from "../../models/type"

export const state: Ref<TBranchResponse> = ref({} as TBranchResponse)

export const fetch = async (id: string): Promise<void> => {
  get<TBranchResponse>('/api/branches/' + id).then((response) => {
    if (response?.data) {
      state.value = response.data
    }
  })
}

export const submit = async () => {
  const data = await put<any, any>('/api/branches/' + state.value.id, state.value)
  if (data?.data) {
    successNotification(data.message)
  }
}