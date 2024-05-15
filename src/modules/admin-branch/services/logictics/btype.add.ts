import { reactive } from 'vue'

import { post } from '@/core/services/helpers/request.helper'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

import type { TBranchType, TBranchTypeRequest } from '../../models/type'

export const init_state: TBranchTypeRequest = {
  label: '',
  enable: true
}

export const state = reactive<TBranchTypeRequest>({ ...init_state })

export const submit = async () => {
  const data = await post<TBranchTypeRequest, TBranchType>('/api/branchtypes', state)
  if (data?.data) {
    resetObject(state, init_state)
    successNotification(data.message)
  }
}