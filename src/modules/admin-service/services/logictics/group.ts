import { reactive, ref, watch } from 'vue'

import { init_pagination, paginationOptions } from './../data/group'

import { get, post } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TGroupService, TGroupServiceRequest } from '../../models/type'
import { EnableEnum } from '@/core/models/enum'
import { v4 } from 'uuid'
import type { Rules } from 'async-validator'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

export const items = ref<TGroupService[]>([
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
  const response = await get<TPaginationResponse<TGroupService>>(
    '/api/groupservices/page',
    paginationOptions.value
  )
  items.value = response?.data.data || []
  pagination.value = response?.data || { ...init_pagination };
}

export const init_state: TGroupServiceRequest = {
  id: v4(),
  label: '',
  enable: Boolean(EnableEnum.ALL)
}

export const state = reactive<TGroupServiceRequest>({ ...init_state })

export const rules: Rules = {
  label: {
    type: 'string',
    min: 5,
    max: 255,
    required: true
  }
}

export const submit = async () => {
  const data = await post<TGroupServiceRequest, TGroupService>('/api/groupservices', state)
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
