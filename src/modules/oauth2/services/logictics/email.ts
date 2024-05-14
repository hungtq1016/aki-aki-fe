import { reactive } from 'vue'
import type { TResetPaswordRequest } from '../../models/type'
import type { InternalRuleItem, Rules, ValidateOption, Values } from 'async-validator'
import { post } from '@/core/services/helpers/request.helper'
import type { TTokenResponse } from '@/core/models/type'
import { errorNotification } from '@/core/services/helpers/alert.helper'
import { useAuthInfo } from '@/core/services/helpers/indexedDB.helper'
import { i18n } from '@/core/services/base/translation'

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
      message: 'Please enter your password' // Thêm message cho trường này
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

const submit = async () => {

  // try {
  //   const data = await post<TEmailRequest, TTokenResponse>('/api/authenticate/send-email', state)

  //   if (data?.data) {
  //     const auth: TTokenResponse = data.data
  //     const saveResult: boolean | undefined = await updateAuthAsync(auth)

  //     if (saveResult) return true

  //     return false
  //   }

  //   return false
  // } catch (error) {
  //   errorNotification(String(error))
  //   return false
  // }
  await console.log(state)
}

export { state, rules, submit }
