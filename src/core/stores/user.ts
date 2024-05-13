import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { TUser } from '@/modules/admin-oauth2/models/type'
import { get } from '../services/helpers/fetcher.helper'
import { firstOrUpdate, readValue } from '../services/helpers/localStorage.helper'

export const useUserstore = defineStore('user', () => {

  const user: Ref<TUser> = ref({} as TUser)

  const fetchUser = async () : Promise<void> => {
    const data = await get<TUser>('/api/authenticate/user')
    if (data?.data) {
      updateData(data.data)
    }

  }

  const updateData = (payload: TUser): void => {
    user.value = payload
    firstOrUpdate('user',payload)
  }

  const isUserExist = (): void => {
    const data = readValue('user');
    if (data !== null) {
        const userData: TUser = JSON.parse(data);
        user.value = userData; 
        isLogin.value = true;
    }
}


  const isLogin: Ref<boolean> = ref(false)

  return { user, fetchUser, isLogin, isUserExist, updateData }
})