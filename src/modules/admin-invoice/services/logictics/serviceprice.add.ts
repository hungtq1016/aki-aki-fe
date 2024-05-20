import { reactive } from 'vue'

import { post } from '@/core/services/helpers/request.helper'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

import type { TServicePrice, TServicePriceRequest } from '../../models/type'
import { StatusEnum } from '@/core/models/enum'

const init_state: TServicePriceRequest = {
  label: '',
  price: 0,
  status: StatusEnum.Active
}

export const state = reactive<TServicePriceRequest>({ ...init_state })

export const submit = async () => {
  await post<TServicePriceRequest, TServicePrice>('/api/serviceprices', state).then(response => {
    if (response?.data) {
      resetObject(state, init_state)
      successNotification(response.message)
    }
  })

}