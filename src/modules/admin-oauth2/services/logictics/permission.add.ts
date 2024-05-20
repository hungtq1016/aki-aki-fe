import { reactive } from 'vue'

import { post } from '@/core/services/helpers/request.helper'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

import type { TPermission, TPermissionRequest } from '../../models/type'
import { StatusEnum } from '@/core/models/enum'

const init_state: TPermissionRequest = {
  type: 'permission',
  value: '',
  status: StatusEnum.Active
}

export const state = reactive<TPermissionRequest>({ ...init_state })

export const submit = async () => {
  const data = await post<TPermissionRequest, TPermission>('/api/permissions', state)
  if (data?.data) {
    successNotification(data.message), resetObject(state, init_state)
  }
}