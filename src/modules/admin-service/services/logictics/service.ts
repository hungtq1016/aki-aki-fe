import { reactive, ref, watch } from 'vue'

import { init_pagination, paginationOptions } from './../data/service'

import { get, post } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TService, TServiceRequest } from '../../models/type'
import { EnableEnum } from '@/core/models/enum'
import { v4 } from 'uuid'
import type { Rules } from 'async-validator'
import { resetObject } from '@/core/services/utils/util.object'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { slugify } from '@/core/services/utils/util.string'

export const items = ref<TService[]>([
  {
    id: v4(),
    title: 'mock-data',
    groupId: 'mock-data',
    imageUrl: '',
    content: 'mock-data',
    slug: '',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    videoEmbed: '',
    desc: '',
    enable: Boolean(EnableEnum.ALL)
  }
])

export const init_state: TServiceRequest = {
  id: v4(),
  title: '',
  content: '',
  imageUrl: '',
  slug: '',
  desc: '',
  videoEmbed: '',
  groupId: '-1',
  enable: Boolean(EnableEnum.ALL)
}

export const state = reactive<TServiceRequest>({ ...init_state })

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  const response = await get<TPaginationResponse<TService>>(
    '/api/services/page',
    paginationOptions.value
  )
  items.value = response?.data.data || []
  resetObject(pagination, init_pagination)
}

watch(
  paginationOptions,
  async () => {
    await fetch()
  },
  { deep: true }
)

export const rules: Rules = {
  title: {
    type: 'string',
    min: 5,
    max: 255,
    required: true
  },
  content: {
    type: 'string',
    min: 5,
    required: true
  },
  videoEmbed: {
    type: 'string',
    min: 5,
    required: true
  },
  imageUrl: {
    type: 'string',
    min: 5,
    required: true
  },
  groupId: {
    type: 'string',
    min: 5,
    required: true
  },
  desc: {
    type: 'string',
    min: 5,
    required: true
  }
}
watch(
  state,
  (newValue) => {
    state.slug = slugify(newValue.title)
  },
  { deep: true }
)

export const submit = async () => {
  const data = await post<TServiceRequest, TService>('/api/services', state)
  if (data?.data) {
    successNotification(data.message), resetObject(state, init_state)
  }
}
