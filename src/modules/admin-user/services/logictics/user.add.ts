import { reactive } from 'vue'

import { post } from '@/core/services/helpers/request.helper'

import type { TUserRequest, TUser } from '../../models/type'

import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'


const init_state: TUserRequest = {
  fullName: '',
  email: '',
  password: 'Th1sIsP@ssword',
  address: '',
  phoneNumber: '',
  imageUrl: '',
  enable: true
}

export const state = reactive<TUserRequest>({ ...init_state })

export const submit = async () => {
  const data = await post<TUserRequest, TUser>('/api/users', state)
  if (data?.data) {
    successNotification(data.message), resetObject(state, init_state)
  }
}
