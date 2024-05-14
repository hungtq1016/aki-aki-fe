import { reactive } from 'vue'
import type { TLoginRequest } from '../../models/type'
import type { Rules } from 'async-validator'
import { post } from '@/core/services/helpers/request.helper'
import type { TTokenResponse } from '@/core/models/type'
import { errorNotification } from '@/core/services/helpers/alert.helper'
import { useAuthInfo } from '@/core/services/helpers/indexedDB.helper'
import { resetObject } from '@/core/services/utils/util.object'

const init_state = {
  email: '',
  password: ''
}

const state = reactive<TLoginRequest>({ ...init_state })

const rules: Rules = {
  password: {
    type: 'string',
    min: 5,
    max: 20,
    required: true
  },
  email: [
    {
      type: 'email',
      required: true
    }
  ]
}

const submit = async (): Promise<boolean> => {
  const { updateAuthAsync } = useAuthInfo()

  try {
    const data = await post<TLoginRequest, TTokenResponse>('/api/authenticate/login', state)

    if (data?.data) {
      const auth: TTokenResponse = data.data
      const saveResult: boolean | undefined = await updateAuthAsync(auth)
      resetObject(state,init_state)
      if (saveResult) return true

      return false
    }

    return false
  } catch (error) {
    errorNotification(String(error))
    return false
  }
}

export { state, rules, submit }
