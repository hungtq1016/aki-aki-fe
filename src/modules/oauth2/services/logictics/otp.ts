import { reactive } from 'vue'
import type { TOTPRequest } from '../../models/type'
import type { Rules } from 'async-validator'
import { post } from '@/core/services/helpers/request.helper'

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

  try {
    post<any, boolean>('/api/authenticate/receive-otp', payload).then(response => {
      if (response?.data) return true
      return false
    })

    return false

  } catch (error) {
    return false
  }
}

export { state, rules, submit }
