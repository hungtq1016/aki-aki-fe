import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { TUser } from '@/modules/admin-oauth2/models/type'
import { get } from '../services/helpers/fetcher.helper'
import { firstOrUpdate, isExist, readValue } from '../services/helpers/localStorage.helper'

export const useUserstore = defineStore('user', () => {

  const user: Ref<TUser> = ref({} as TUser)

  const fetchUser = async () : Promise<void> => {
    const data = await get<TUser>('/api/authenticate/user')
    if (data?.data) {
      user.value = data.data
    }

    firstOrUpdate('user',user.value)
  }

  const isUserExist = (): void => {
    if (isExist('user')) {
      isLogin.value = true
      user.value = readValue<TUser>('user')
    }
  }

  const isLogin: Ref<boolean> = ref(false)

  return { user, fetchUser, isLogin, isUserExist }
})