import { ref } from "vue"

import { get, put } from "@/core/services/helpers/request.helper"
import { successNotification } from "@/core/services/helpers/alert.helper"

import type { Ref } from "vue"
import type { TActivity } from "../../models/type"

export const state: Ref<TActivity> = ref({} as TActivity)

export const fetch = async (id: string): Promise<void> => {

  get<TActivity>('/api/activities/' + id).then((response) => {
    if (response?.data) {
      state.value = response.data
    }
  })
}

export const submit = async () => {
  const data = await put<any, any>('/api/activities/' + state.value.id, state.value)
  if (data?.data) {
    successNotification(data.message)
  }
}
