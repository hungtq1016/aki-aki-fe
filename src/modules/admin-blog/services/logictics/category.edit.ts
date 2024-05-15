import { ref, watch, type Ref } from 'vue'

import { get } from '@/core/services/helpers/request.helper'
import { slugify } from '@/core/services/utils/util.string'
import { successNotification } from '@/core/services/helpers/alert.helper'

import type { TCategoryResponse } from '../../models/type'
import { put } from '@/core/services/helpers/fetcher.helper'

export const state: Ref<TCategoryResponse> = ref({} as TCategoryResponse)

export const fetch = async (id: string): Promise<void> => {
  get<TCategoryResponse>('/api/categories/' + id).then((response) => {
    if (response?.data) {
      state.value = response.data
    }
  })
}

export const submit = async () => {
  const data = await put<any, any>('/api/categories/' + state.value.id, state.value)
  if (data?.data) {
    successNotification(data.message)
  }
}

watch(state,(newValue)=>{
  state.value.slug = slugify(newValue.title)
},{deep:true})