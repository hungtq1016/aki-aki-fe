import { reactive } from 'vue'

import { post } from '@/core/services/helpers/request.helper'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

import type { TGroupUrl, TGroupUrlRequest } from '../../models/type'

export const init_state: TGroupUrlRequest = {
  label: '',
  enable: true
}

export const state = reactive<TGroupUrlRequest>({ ...init_state })

export const submit = async () => {
  const data = await post<TGroupUrlRequest, TGroupUrl>('/api/groupurls', state)
  if (data?.data) {
    resetObject(state, init_state)
    successNotification(data.message)
  }
}