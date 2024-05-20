import { reactive, watch } from 'vue'

import { post } from '@/core/services/helpers/request.helper'
import { slugify } from '@/core/services/utils/util.string'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

import type { TCategory, TCategoryRequest } from '../../models/type'
import { StatusEnum } from '@/core/models/enum'

const init_state: TCategoryRequest = {
  title: '',
  slug: '',
  status: StatusEnum.Active
}

export const state = reactive<TCategoryRequest>({ ...init_state })

watch(
  state,
  (newValue) => {
    state.slug = slugify(newValue.title)
  },
  { deep: true }
)

export const submit = async () => {
  const data = await post<TCategoryRequest, TCategory>('/api/categories', state)
  if (data?.data) {
    resetObject(state, init_state)
    successNotification(data.message)
  }
}