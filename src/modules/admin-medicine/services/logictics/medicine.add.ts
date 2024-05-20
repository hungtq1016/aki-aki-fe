import { reactive, watch } from 'vue'

import {  post } from '@/core/services/helpers/request.helper'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { slugify } from '@/core/services/utils/util.string'
import { resetObject } from '@/core/services/utils/util.object'

import type { TMedicine, TMedicineRequest } from '../../models/type'
import { StatusEnum } from '@/core/models/enum'

const init_state: TMedicineRequest = {
  title: '',
  slug: '',
  brand: '',
  desc: '',
  status: StatusEnum.Active
}

export const state = reactive<TMedicineRequest>({ ...init_state })

watch(
  state,
  (newValue) => {
    state.slug = slugify(newValue.title)
  },
  { deep: true }
)

export const submit = async () => {
  await post<TMedicineRequest, TMedicine>('/api/medicines', state).then(response => {
    if (response?.data) {
      successNotification(response.message),
        resetObject(state, init_state)
    }
  })
}