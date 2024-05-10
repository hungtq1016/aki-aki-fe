import { reactive, ref, watch } from 'vue'

import { init_pagination, paginationOptions } from './../data/branch'

import { get, post } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TBranch, TBranchRequest } from '../../models/type'
import { EnableEnum } from '@/core/models/enum'
import type { Rules } from 'async-validator'
import { v4 } from 'uuid'
import { resetObject } from '@/core/services/utils/util.object'
import { successNotification } from '@/core/services/helpers/alert.helper'

export const items = ref<TBranch[]>([
  {
    id: v4(),
    address1: 'mock-data',
    address2: 'mock-data',
    phone1: 'mock-data',
    phone2: '123',
    addressEmbed: '',
    name: '',
    typeId: '-1',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    enable: Boolean(EnableEnum.ALL)
  }
])

export const rules: Rules = {
  name: {
    type: 'string',
    min: 5,
    max: 255,
    required: true
  },
  address1: {
    type: 'string',
    min: 5,
    required: true
  },
  phone1: {
    type: 'string',
    min: 5,
    required: true
  },
  typeId: {
    type: 'string',
    min: 5,
    required: true
  }
}
export const pagination = ref<TPagination>({ ...init_pagination })


export const init_state: TBranchRequest = {
  id: v4(),
  address1: '',
  address2: '',
  phone1: '',
  phone2: '',
  addressEmbed: '',
  name: '',
  typeId: '-1',
  enable: Boolean(EnableEnum.ALL)
}

export const state = reactive<TBranchRequest>({ ...init_state })

export const fetch = async () => {
  const response = await get<TPaginationResponse<TBranch>>(
    '/api/branches/page',
    paginationOptions.value
  )
  items.value = response?.data.data || []
  resetObject(pagination, init_pagination)
}


export const submit = async () => {
  const data = await post<TBranchRequest, TBranch>('/api/branches', state)
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
