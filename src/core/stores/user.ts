import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { TUser } from '@/modules/admin-oauth2/models/type'
import { get } from '../services/helpers/fetcher.helper'
import { deleteValue, firstOrUpdate, readValue } from '../services/helpers/localStorage.helper'
import { useAuthInfo } from '../services/helpers/indexedDB.helper'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', () => {
  const user: Ref<TUser> = ref({} as TUser)
  const isLogin: Ref<boolean> = ref(false)
  const router = useRouter()
  const fetchUser = async (): Promise<void> => {
    const data = await get<TUser>('/api/authenticate/user')
    if (data?.data) {
      updateData(data.data)
    }
  }

  const logout = async () => {
    const { deleteAuthAsync } = useAuthInfo()
    user.value = {} as TUser
    toggleLogin(false)
    deleteValue('user')
    router.push('/')
    await deleteAuthAsync()
  }

  const updateData = (payload: TUser): void => {
    user.value = payload
    firstOrUpdate('user', payload)
  }

  const isUserExist = (): void => {
    const data = readValue('user')
    if (data !== null) {
      const userData: TUser = JSON.parse(data)
      user.value = userData
      toggleLogin(true)
    }
  }

  const toggleLogin = (value: boolean) => {
    isLogin.value = value
  }

  return { user, fetchUser, isLogin, isUserExist, updateData, logout, toggleLogin }
})
