import { reactive } from 'vue'

import { post } from '@/core/services/helpers/request.helper'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

import type { TActivity, TActivityRequest } from '../../models/type'
import { StatusEnum } from '@/core/models/enum'
import { v4 } from 'uuid'

const init_state: TActivityRequest = {
  id: v4(),
  title: '',
  description: '',
  status: StatusEnum.Active
}

export const state = reactive<TActivityRequest>({ ...init_state })

export const submit = async () => {
  const data = await post<TActivityRequest, TActivity>('/api/activities', state)
  if (data?.data) {
    resetObject(state, init_state)
    successNotification(data.message)
  }
}
