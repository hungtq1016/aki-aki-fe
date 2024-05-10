import { reactive, ref, watch } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../data/permission'

import { get, post } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TPermission, TPermissionRequest } from '../../models/type'
import { EnableEnum } from '@/core/models/enum'
import type { Rules } from 'async-validator'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

export const items = ref<TPermission[]>([
  {
    id: v4(),
    type: 'mock-data',
    value: 'mock-data',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    enable: Boolean(EnableEnum.ALL)
  }
])


export const init_state: TPermissionRequest = {
  id: v4(),
  type: '',
  value: '',
  enable: Boolean(EnableEnum.ALL)
}

export const state = reactive<TPermissionRequest>({ ...init_state })

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  const response = await get<TPaginationResponse<TPermission>>('/api/permissions/page', paginationOptions.value)
  items.value = response?.data.data || []
  resetObject(pagination, init_pagination)
}



export const rules: Rules = {
  type: {
    type: 'string',
    min: 5,
    max: 255,
    required: true
  },
  value: {
    type: 'string',
    min: 1,
    required: true
  }
}

export const submit = async () => {
  const data = await post<TPermissionRequest, TPermission>('/api/permissions', state)
  if (data?.data) {
    successNotification(data.message), resetObject(state, init_state)
  }
}

watch(
  paginationOptions,
  async () => {
    await fetch()
  },
  { deep: true }
)
