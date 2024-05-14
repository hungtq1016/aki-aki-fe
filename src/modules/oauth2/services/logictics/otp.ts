import { reactive } from 'vue'
import type { TOTPRequest } from '../../models/type'
import type { Rules } from 'async-validator'
import { post } from '@/core/services/helpers/request.helper'
import { errorNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'
import type { TTokenResponse } from '@/core/models/type'
import { useAuthInfo } from '@/core/services/helpers/indexedDB.helper'

const init_state = {
  n1: '',
  n2: '',
  n3: '',
  n4: '',
  n5: '',
  n6: '',
}

const state = reactive<TOTPRequest>({ ...init_state })

const rules: Rules = {
  n1: {
    type: 'string',
    required: true
  },
  n2: {
    type: 'string',
    required: true
  },
  n3: {
    type: 'string',
    required: true
  },
  n4: {
    type: 'string',
    required: true
  },
  n5: {
    type: 'string',
    required: true
  },
  n6: {
    type: 'string',
    required: true
  },
}

const submit = async (email: string): Promise<boolean> => {
  const payload = {
    otp: state.n1 + state.n2 + state.n3 + state.n4 + state.n5 + state.n6,
    email: email
  }
  const { updateAuthAsync } = useAuthInfo()

  try {
    const data = await post<any, TTokenResponse>('/api/authenticate/receive-otp', payload)

    if (data?.data) {
      const auth: TTokenResponse = data.data
      const saveResult: boolean | undefined = await updateAuthAsync(auth)

      resetObject(state, init_state)

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
