import { reactive, ref, watch } from 'vue'

import { init_pagination, paginationOptions } from '../data/role'

import { get, post } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TRole, TRoleRequest } from '../../models/type'

import type { Rules } from 'async-validator'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'
import { v4 } from 'uuid'

export const items = ref<TRole[]>([
  {
    id: v4(),
    name: 'mock-data',
    note: 'mock-data',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    enable: true
  }
])
export const pagination = ref<TPagination>({ ...init_pagination })
export const fetch = async () => {
  const response = await get<TPaginationResponse<TRole>>('/api/roles/page', paginationOptions.value)
  items.value = response?.data.data || []
  pagination.value = response?.data || { ...init_pagination };
}

export const init_state: TRoleRequest = {
  note: '',
  name: '',
}

export const state = reactive<TRoleRequest>({ ...init_state })

export const rules: Rules = {
  name: {
    type: 'string',
    min: 5,
    max: 255,
    required: true
  },
  note: {
    type: 'string',
    min: 5,
    max: 255,
    required: true
  }
}

export const submit = async () => {
  const data = await post<TRoleRequest, TRole>('/api/roles', state)
  if (data?.data) {
    resetObject(state, init_state)
    successNotification(data.message)
  }
}

watch(
  paginationOptions,
  async () => {
    await fetch()
  },
  { deep: true }
)
