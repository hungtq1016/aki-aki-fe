import { ref, watch, type Ref } from 'vue'

import { get, put } from '@/core/services/helpers/request.helper'

import type { TTagResponse } from '../../models/type'

import { slugify } from '@/core/services/utils/util.string'
import { successNotification } from '@/core/services/helpers/alert.helper'

export const state: Ref<TTagResponse> = ref({} as TTagResponse)

export const fetch = async (id: string): Promise<void> => {
  get<TTagResponse>('/api/tags/' + id).then((response) => {
    if (response?.data) {
      state.value = response.data
    }
  })
}

export const submit = async () => {
  const data = await put<any, any>('/api/tags/' + state.value.id, state.value)
  if (data?.data) {
    successNotification(data.message)
  }
}

watch(state,(newValue)=>{
  state.value.slug = slugify(newValue.title)
},{deep:true})