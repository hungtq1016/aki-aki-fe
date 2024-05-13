import { reactive, ref, watch, type Ref } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../data/schedule'

import { get, post } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TSchedule, TScheduleRequest, TTag } from '../../models/type'
import { EnableEnum } from '@/core/models/enum'
import type { Rules } from 'async-validator'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { slugify } from '@/core/services/utils/util.string'
import { resetObject } from '@/core/services/utils/util.object'

export const items = ref<TSchedule[]>([
  {
    id: v4(),
    title: 'mock-data',
    content: 'mock-data',
    videoEmbed: '',
    desc: 'mock-data',
    slug: 'mock-data',
    type: 'mock-data',
    imageUrl: '',
    categoryId: '',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    enable: Boolean(EnableEnum.ALL)
  }
])

export const selectedTags: Ref<TTag[]> = ref([])

export const init_state: TScheduleRequest = {
  id: v4(),
  title: '',
  content: '',
  videoEmbed: '',
  desc: '',
  slug: '',
  imageUrl: '',
  categoryId: '-1',
  enable: Boolean(EnableEnum.ALL)
}

export const state = reactive<TScheduleRequest>({ ...init_state })

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  const response = await get<TPaginationResponse<TSchedule>>(
    '/api/schedules/page',
    paginationOptions.value
  )
  items.value = response?.data.data || []
  resetObject(pagination, init_pagination)

  pagination.value = response?.data || { ...init_pagination }
}

watch(
  state,
  (newValue) => {
    state.slug = slugify(newValue.title)
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
  desc: {
    type: 'string',
    min: 5,
    required: true
  },
  imageUrl: {
    type: 'string',
    min: 5,
    required: true
  },
  videoEmbed: {
    type: 'string',
    min: 5,
    required: true
  },
  categoryId: {
    type: 'string',
    min: 5,
    required: true
  },
  tags: {
    type: 'array',
    min: 1
  }
}

export const submit = async () => {
  const data = await post<TScheduleRequest, TSchedule>('/api/schedules', state)
  if (data?.data) {
    successNotification(data.message), resetObject(state, init_state)
  }
  selectedTags.value.forEach(async (tag) => {
    const payload = {
      id: v4(),
      scheduleId: state.id,
      tagId: tag.id
    }
    const responseTag = await post<any, any>('/api/scheduletags', payload)
  })
}

watch(
  paginationOptions,
  async () => {
    await fetch()
  },
  { deep: true }
)
