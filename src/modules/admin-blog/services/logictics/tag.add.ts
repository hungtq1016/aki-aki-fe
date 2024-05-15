import { reactive, watch } from 'vue'
import { v4 } from 'uuid'

import {  post } from '@/core/services/helpers/request.helper'
import { slugify } from '@/core/services/utils/util.string'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

import type { TTagRequest, TTag } from '../../models/type'

const init_state: TTagRequest = {
  id: v4(),
  title: '',
  slug: '',
  enable: true
}

export const state = reactive<TTagRequest>({ ...init_state })

export const submit = async () => {
  const data = await post<TTagRequest, TTag>('/api/tags', state)
  if (data?.data) {
    successNotification(data.message), resetObject(state, init_state)
  }
}

watch(
  state,
  (newValue) => {
    state.slug = slugify(newValue.title)
  },
  { deep: true }
)

