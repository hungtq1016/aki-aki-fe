import { reactive, ref } from 'vue'
import type { TRegisterRequest } from '../../models/type'
import type { Rules } from 'async-validator'
import { post } from '@/core/services/helpers/request.helper'
import type { TTokenResponse } from '@/core/models/type'
import { errorNotification } from '@/core/services/helpers/alert.helper'
import { useAuthInfo } from '@/core/services/helpers/indexedDB.helper'
import { resetObject } from '@/core/services/utils/util.object'
import type { TGroupRequest, TRole, TRoleRequest } from '@/modules/admin-oauth2/models/type'
import { get } from '@/core/services/helpers/fetcher.helper'
import { v4 } from 'uuid'

const init_state: TRegisterRequest = {
  email: '',
  password: '',
  fullName: '',
  rePassword: '',
  phoneNumber: ''
}

const state = reactive<TRegisterRequest>({ ...init_state })
const role = ref<TRole>({} as TRole)
const rules: Rules = {
  password: {
    type: 'string',
    min: 5,
    required: true
  },
  rePassword: {
    type: 'string',
    min: 5,
    required: true
  },
  fullName: {
    type: 'string',
    min: 5,
    required: true
  },
  email: {
    type: 'email',
    min: 5,
    required: true
  },
  phoneNumber: {
    type: 'string',
    min: 5,
    required: true
  },
}

export const fetchUserRole = async() => {
  await get<TRole>('/api/roles/name/customer').then(response => {
    if (response?.data) {
      role.value = response.data
    }
  })
}

export const submitGroup = async(userId: string) => {
  const payload: TGroupRequest = {
    id: v4(),
    roleId: role.value.id,
    userId
  }
  await post<any,any>('/api/groups',payload)
}

const submit = async (): Promise<boolean> => {
  const { createAuthAsync, deleteAuthAsync } = useAuthInfo()

  try {
    const response = await post<TRegisterRequest, TTokenResponse>('/api/authenticate/register', state)

    if (response?.data) {
      const token: TTokenResponse = response.data

      await deleteAuthAsync()

      const saveResult: boolean = await createAuthAsync(token)

      resetObject(state, init_state)

      return saveResult
    }
    
    return false

  } catch (error) {
    errorNotification(String(error))
    return false
  }
}

export { state, rules, submit }
