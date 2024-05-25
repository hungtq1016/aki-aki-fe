import { reactive } from 'vue'

import { post } from '@/core/services/helpers/request.helper'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

import type { TBranchType, TBranchTypeRequest } from '../../models/type'
import { StatusEnum } from '@/core/models/enum'
import { v4 } from 'uuid'

const init_state: TBranchTypeRequest = {
  id: v4(),
  label: '',
  status: StatusEnum.Active
}

export const state = reactive<TBranchTypeRequest>({ ...init_state })

export const submit = async () => {
  const data = await post<TBranchTypeRequest, TBranchType>('/api/branchtypes', state)
  if (data?.data) {
    resetObject(state, init_state)
    successNotification(data.message)
  }
}