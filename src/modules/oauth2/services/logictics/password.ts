import { reactive } from 'vue'
import type { TResetPasswordRequest, TResetPaswordRequest } from '../../models/type'
import type { InternalRuleItem, Rules, ValidateOption, Values } from 'async-validator'
import { post } from '@/core/services/helpers/request.helper'
import { errorNotification, successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'


const init_state: TResetPaswordRequest = {
  rePassword: '',
  password: ''
}

const state = reactive<TResetPaswordRequest>({ ...init_state })

const rules: Rules = {
  password: {
    type: 'string',
    required: true,
    message: 'Please enter your password again for confirmation' // Thêm message cho trường này
  },
  rePassword: [
    {
      type: 'string',
      required: true,
      message: 'Please enter your password'
    },
    {
      validator: passwordConfirming // Sử dụng validator function
    }
  ]
}
function passwordConfirming(rule: InternalRuleItem, value: any, callback: (error?: string | Error | undefined) => void, source: Values, options: ValidateOption) {
  if (value !== source.rePassword) {
    callback(new Error('The passwords do not match'));
  } else {
    callback();
  }
}

const submit = async (payload: TResetPasswordRequest) => {

  try {
    const response = await post<TResetPasswordRequest, boolean>('/api/authenticate/send-reset-password', payload)
    if (response?.data) {
      successNotification(""+response.data)
      return true
    }
    return false
  } catch (error) {
    errorNotification(String(error))
    return false
  }

}

export { state, rules, submit }
