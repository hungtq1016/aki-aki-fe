import { reactive, ref, watch, type Ref } from 'vue'

import { init_pagination, paginationOptions } from '../data/user'

import { get, post } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TUserRequest, TUser } from '../../models/type'
import { EnableEnum } from '@/core/models/enum'
import { v4 } from 'uuid'
import type { Rules } from 'async-validator'
import { slugify } from '@/core/services/utils/util.string'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

export const items = ref<TUser[]>([
  {
    id: v4(),
    fullName: 'mock-data',
    email: 'mock-data',
    password: 'mock-data',
    address: 'mock-data',
    phoneNumber: 'mock-data',
    imageUrl: 'mock-data',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    enable: Boolean(EnableEnum.ALL)
  }
])
export const pagination = ref<TPagination>(init_pagination)
export const fetch = async () => {
  const response = await get<TPaginationResponse<TUser>>('/api/users/page', paginationOptions.value)
  items.value = response?.data.data || []
  pagination.value = response?.data || init_pagination
}

const init_state: TUserRequest = {
  id: v4(),
  fullName: '',
  email: '',
  password: '',
  address: '',
  phoneNumber: '',
  imageUrl: '',
  enable: Boolean(EnableEnum.ALL)
}

export const state = reactive<TUserRequest>({ ...init_state })

export const rules: Rules = {
  title: {
    type: 'string',
    min: 5,
    max: 255,
    required: true
  }
}

export const submit = async () => {
  const data = await post<TUserRequest, TUser>('/api/users', state)
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
