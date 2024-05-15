import { reactive, ref, watch, type Ref } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../data/schedule'

import { get, post } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TSchedule, TScheduleRequest } from '../../models/type'
import type { Rules } from 'async-validator'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'
import type { TUser } from '@/modules/admin-oauth2/models/type'

export const items = ref<TSchedule[]>([
  {
    id: v4(),
    endDay: '',
    startDay: '',
    endTime: '',
    startTime: '',
    userId: '-1',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    enable: true
  }
])

const init_state: TScheduleRequest = {
  endDay: '',
  startDay: '',
  endTime: '',
  startTime: '',
  userId: '-1',
  enable: true
}

export const state = reactive({...init_state})

export const pagination = ref<TPagination>({ ...init_pagination })

export const users: Ref<TUser[]> = ref([])

watch(
  paginationOptions,
  async () => {
    await fetch()
  },
  { deep: true }
)

export const fetchUsers = async (value: string, role: string = 'customer'): Promise<void> => {

  const options = {...paginationOptions.value,value}
  
  get<TPaginationResponse<TUser>>(`/api/users/role/${role}/search`, options).then((response) => {
    if (response?.data) {
      const { data, ...page } = response.data
      users.value = data
      pagination.value = page
    }
  })
}


export const fetch = async () => {
  const response = await get<TPaginationResponse<TSchedule>>(
    '/api/schedules/page',
    paginationOptions.value
  )
  items.value = response?.data.data || []
  pagination.value = response?.data || { ...init_pagination };

  pagination.value = response?.data || { ...init_pagination }
}

export const rules: Rules = {
  userId: {
    type: 'string',
    min: 5,
    required: true
  },
  endDay: {
    type: 'string',
    min: 1,
    required: true
  },
  startDay: {
    type: 'string',
    min: 1,
    required: true
  },
  endTime: {
    type: 'string',
    min: 1,
    required: true
  },
  startTime: {
    type: 'string',
    min: 1,
    required: true
  }
}

export const submit = async () => {
  const data = await post<TScheduleRequest, TSchedule>('/api/schedules', state)
  if (data?.data) {
    successNotification(data.message), resetObject(state, init_state)
  }
}