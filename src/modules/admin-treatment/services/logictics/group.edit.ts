import { ref, watch } from "vue"

import { get, put } from "@/core/services/helpers/request.helper"
import { successNotification } from "@/core/services/helpers/alert.helper"
import { slugify } from "@/core/services/utils/util.string"

import type { Ref } from "vue"
import type { TGroupServiceResponse } from "../../models/type"

export const state: Ref<TGroupServiceResponse> = ref({} as TGroupServiceResponse)

export const fetch = async (id: string): Promise<void> => {

  get<TGroupServiceResponse>('/api/groupservices/' + id).then((response) => {
    if (response?.data) {
      state.value = response.data
    }
  })
}

export const submit = async () => {
  const data = await put<any, any>('/api/groupservices/' + state.value.id, state.value)
  if (data?.data) {
    successNotification(data.message)
  }
}

watch(state, (newValue) => {
  state.value.slug = slugify(newValue.label)
}, { deep: true })