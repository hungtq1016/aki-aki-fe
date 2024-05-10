import { reactive, ref, watch } from 'vue'

import { init_pagination, paginationOptions } from '../data/btype'

import { get, post } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TBranchType, TBranchTypeRequest } from '../../models/type'
import { EnableEnum } from '@/core/models/enum'
import { v4 } from 'uuid'
import type { Rules } from 'async-validator'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

export const items = ref<TBranchType[]>([
  {
    id: '1',
    label: 'mock-data',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    enable: Boolean(EnableEnum.ALL)
  }
])
export const pagination = ref<TPagination>({ ...init_pagination })
export const fetch = async () => {
  const response = await get<TPaginationResponse<TBranchType>>(
    '/api/branchtypes/page',
    paginationOptions.value
  )
  items.value = response?.data.data || []
  resetObject(pagination, init_pagination)
}

export const init_state: TBranchTypeRequest = {
  id: v4(),
  label: '',
  enable: Boolean(EnableEnum.ALL)
}

export const state = reactive<TBranchTypeRequest>({ ...init_state })

export const rules: Rules = {
  label: {
    type: 'string',
    min: 5,
    max: 255,
    required: true
  }
}

export const submit = async () => {
  const data = await post<TBranchTypeRequest, TBranchType>('/api/branchtypes', state)
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
