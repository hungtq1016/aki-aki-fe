import { reactive } from 'vue'

import { post } from '@/core/services/helpers/request.helper'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

import type { TRole, TRoleRequest } from '../../models/type'

const init_state: TRoleRequest = {
  note: '',
  name: '',
  enable: true
}

export const state = reactive<TRoleRequest>({ ...init_state })

export const submit = async () => {
  const data = await post<TRoleRequest, TRole>('/api/roles', state)
  if (data?.data) {
    resetObject(state, init_state)
    successNotification(data.message)
  }
}