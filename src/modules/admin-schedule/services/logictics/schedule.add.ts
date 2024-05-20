import { reactive, ref, watch, type Ref } from 'vue'

import { init_pagination, paginationOptions } from '../data/schedule'
import { get, post } from '@/core/services/helpers/request.helper'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'
import { useDebounceFn } from '@vueuse/core'

import type { TUser } from '@/modules/admin-oauth2/models/type'
import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TSchedule, TScheduleRequest } from '../../models/type'
import type { TService } from '@/modules/admin-service/models/type'
import type { TBranch } from '@/modules/admin-branch/models/type'
import { StatusEnum } from '@/core/models/enum'

const init_state: TScheduleRequest = {
  date: new Date(),
    branchId: '-1',
    desc: '',
    fullName: '',
    phoneNumber: '',
    serviceId: '-1',
    time: "",
    email: '-1',
    status: StatusEnum.Active
}
export const time = ref()
export const date = ref(new Date)
export const state = reactive({...init_state})
export const pagination = ref<TPagination>({ ...init_pagination })
export const users: Ref<TUser[]> = ref([])
export const id = ref('')
export const search: Ref<string> = ref('')
export const services: Ref<TService[]> = ref([])
export const branches: Ref<TBranch[]> = ref([])

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

export const fetchServices = async () => {

  get<TPaginationResponse<TService>>('/api/services/group/chuyen-khoa?pageNumber=1&pageSize=20&status=1').then(response => {
      if (response?.data) {
          services.value = response.data.data
      }
  })
}

export const fetchBranches = async () => {

  get<TBranch[]>('/api/branches').then(response => {
      if (response?.data) {
          branches.value = response.data
      }
  })
}


export const submit = async () => {
  state.desc = "Bác sĩ cập nhật"
  post<TScheduleRequest, TSchedule>('/api/schedules', state).then(response => {
    if (response?.data) {
      successNotification(response.message), 
      resetObject(state, init_state)
    }
  }).finally(()=>{
    id.value = ''
  })
  
}

watch(time,(newValue)=>{
  state.time = JSON.stringify(newValue)
},{deep:true})

watch(id, (newValue) =>{
  const user = users.value.find(user=>user.id===newValue)
  if(user !== undefined) {
    state.email = user.email
    state.fullName = user.fullName
    state.phoneNumber = user.phoneNumber
  }
})
