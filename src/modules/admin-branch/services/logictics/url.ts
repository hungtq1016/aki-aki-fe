import { reactive, ref, watch } from 'vue'

import { init_pagination, paginationOptions } from '../data/url'

import { get, post } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TUrl, TUrlRequest } from '../../models/type'
import type { Rules } from 'async-validator'
import { v4 } from 'uuid'
import { resetObject } from '@/core/services/utils/util.object'
import { successNotification } from '@/core/services/helpers/alert.helper'

export const items = ref<TUrl[]>([
  {
    id: v4(),
    label: 'mock-data',
    slug: 'mock-data',
    imageUrl: 'mock-data',
    type: '123',
    tag: '-1',
    groupId: '-1',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    enable: true
  }
])

export const rules: Rules = {
  label: {
    type: 'string',
    min: 5,
    max: 255,
    required: true
  },
  slug: {
    type: 'string',
    min: 5,
    required: true
  },
  imageUrl: {
    type: 'string',
    min: 5,
    required: true
  },
  tag: {
    type: 'string',
    min: 1,
    required: true
  },
  groupId: {
    type: 'string',
    min: 5,
    required: true
  }
}

export const pagination = ref<TPagination>({ ...init_pagination })

export const init_state: TUrlRequest = {
  label: '',
  slug: '',
  imageUrl: '',
  type: '',
  tag: '',
  groupId: '-1',
  enable: true
}

export const state = reactive<TUrlRequest>({ ...init_state })

export const fetch = async () => {
  const response = await get<TPaginationResponse<TUrl>>('/api/urls/page', paginationOptions.value)
  items.value = response?.data.data || []
  pagination.value = response?.data || { ...init_pagination };
}

export const submit = async () => {
  const data = await post<TUrlRequest, TUrl>('/api/urls', state)
  if (data?.data) {
    successNotification(data.message), resetObject(state, init_state)
  }
}

export const elementTags = [
  {
    id:'none',
    name:'none'
  },
  {
    id:'url',
    name:'url'
  },
  {
    id: 'a-tag',
    name: 'a-tag'
  },
  {
    id: 'router-link',
    name: 'router-link'
  }
]

export const type = [
  {
    id:'',
    name:'url'
  },
  {
    id:'tel:',
    name:'phone'
  },
  {
    id: 'mailto:',
    name: 'email'
  }
]

watch(
  paginationOptions,
  async () => {
    await fetch()
  },
  { deep: true }
)
