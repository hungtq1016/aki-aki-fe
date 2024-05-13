import { reactive, ref, watch } from 'vue'

import { init_pagination, paginationOptions } from '../data/medicine'

import { get, post } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TMedicine, TMedicineRequest } from '../../models/type'
import { EnableEnum } from '@/core/models/enum'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { v4 } from 'uuid'
import { slugify } from '@/core/services/utils/util.string'
import type { Rules } from 'async-validator'
import { resetObject } from '@/core/services/utils/util.object'

export const items = ref<TMedicine[]>([
  {
    id: v4(),
    title: 'Paracetamol',
    slug: 'paracetamol',
    brand: 'CÔNG TY CỔ PHẦN DƯỢC - VẬT TƯ Y TẾ THANH HÓA - THEPHACO',
    desc: 'Paracetamol, còn được gọi là acetaminophen, là một loại thuốc có tác dụng hạ sốt và giảm đau, tuy nhiên không như aspirin, thuốc không hoặc ít có tác dụng chống viêm. Bằng chứng về khả năng hạ sốt trên đối tượng là trẻ em của thuốc này vẫn còn yếu, chưa rõ ràng.',
    enable: Boolean(EnableEnum.ALL),
    createdAt: '2024-05-08T09:51:09.42',
    updatedAt: '2024-05-08T09:51:09.42'
  }
])

export const init_state: TMedicineRequest = {
  id: v4(),
  title: '',
  slug: '',
  brand: '',
  desc: '',
  enable: Boolean(EnableEnum.ALL)
}

export const state = reactive<TMedicineRequest>({ ...init_state })

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  const response = await get<TPaginationResponse<TMedicine>>(
    '/api/medicines/page',
    paginationOptions.value
  )
  items.value = response?.data.data || []
  resetObject(pagination, init_pagination)
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
  brand: {
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

export const submit = async () => {
  const data = await post<TMedicineRequest, TMedicine>('/api/medicines', state)
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
