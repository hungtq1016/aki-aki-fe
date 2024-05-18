import { reactive } from 'vue'

import { post } from '@/core/services/helpers/request.helper'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

import type { TFaq, TFaqRequest } from '../../models/type'

const init_state: TFaqRequest = {
  question: '',
  answer: '',
  src:'',
  enable: true
}

export const state = reactive<TFaqRequest>({ ...init_state })

export const submit = async () => {
  const data = await post<TFaqRequest, TFaq>('/api/faqs', state)
  if (data?.data) {
    resetObject(state, init_state)
    successNotification(data.message)
  }
}