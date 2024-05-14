import { reactive } from 'vue'
import type { TEmailRequest } from '../../models/type'
import type {  Rules } from 'async-validator'
import { post } from '@/core/services/helpers/fetcher.helper'
import { errorNotification, successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

const init_state: TEmailRequest = {
  email: ''
}

const state = reactive<TEmailRequest>({ ...init_state })

const rules: Rules = {
  email: {
    type: 'string',
    required: true,
  }
}

const submit = async () => {
    try {
        const data = await post<TEmailRequest, string>('/api/authenticate/send-otp', state)
    
        if (data?.data) {
            successNotification(data.data)
            return true
        }
        resetObject(state,init_state)
        return false
      } catch (error) {
        errorNotification(String(error))
        return false
      }
}

export { state, rules, submit }
