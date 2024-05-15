import { reactive } from 'vue'

import { post } from '@/core/services/helpers/request.helper'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

import type { TPermission, TPermissionRequest } from '../../models/type'

const init_state: TPermissionRequest = {
  type: '',
  value: '',
  enable: true
}

export const state = reactive<TPermissionRequest>({ ...init_state })

export const submit = async () => {
  const data = await post<TPermissionRequest, TPermission>('/api/permissions', state)
  if (data?.data) {
    successNotification(data.message), resetObject(state, init_state)
  }
}