import { reactive, watch } from 'vue'

import { post } from '@/core/services/helpers/request.helper'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'
import { slugify } from '@/core/services/utils/util.string'

import type { TGroupService, TGroupServiceRequest } from '../../models/type'
import { StatusEnum } from '@/core/models/enum'

const init_state: TGroupServiceRequest = {
  label: '',
  slug: '',
  status: StatusEnum.Active
}

export const state = reactive<TGroupServiceRequest>({ ...init_state })

export const submit = async () => {
  const data = await post<TGroupServiceRequest, TGroupService>('/api/groupservices', state)
  if (data?.data) {
    resetObject(state, init_state)
    successNotification(data.message)
  }
}

watch(state, (newValue) => {
  state.slug = slugify(newValue.label)
}, { deep: true })
