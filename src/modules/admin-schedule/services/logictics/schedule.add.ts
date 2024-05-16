import { reactive, ref, watch, type Ref } from 'vue'

import { init_pagination, paginationOptions } from '../data/schedule'
import { get, post } from '@/core/services/helpers/request.helper'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'
import { useDebounceFn } from '@vueuse/core'

import type { TUser } from '@/modules/admin-oauth2/models/type'
import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TSchedule, TScheduleRequest } from '../../models/type'

const init_state: TScheduleRequest = {
  date: new Date(),
    branchId: '-1',
    desc: '',
    fullName: '',
    phoneNumber: '',
    serviceId: '-1',
    time: "",
    email: '-1',
    enable: true
}
export const time = ref()
export const state = reactive({...init_state})
export const pagination = ref<TPagination>({ ...init_pagination })
export const users: Ref<TUser[]> = ref([])

export const search: Ref<string> = ref('')

export const debouncedFn = useDebounceFn(async () => {
  await fetchUsers()
}, 600, { maxWait: 5000 })

export const fetchUsers = async (): Promise<void> => {

  const options = {...paginationOptions.value,value:search.value}
  
  get<TPaginationResponse<TUser>>(`/api/users/role/customer/search`, options).then((response) => {
    if (response?.data) {
      const { data, ...page } = response.data
      users.value = data
      pagination.value = page
    }
  })
}

export const submit = async () => {
  const data = await post<TScheduleRequest, TSchedule>('/api/schedules', state)
  if (data?.data) {
    successNotification(data.message), resetObject(state, init_state)
  }
}
watch(time,(newValue)=>{
  state.time = JSON.stringify(newValue)
},{deep:true})