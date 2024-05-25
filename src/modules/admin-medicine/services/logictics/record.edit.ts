import { ref, watch, type Ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'

import { get, put } from '@/core/services/helpers/request.helper'
import { paginationOptions } from "../data/record"
import { successNotification } from '@/core/services/helpers/alert.helper'

import type { TRecord } from '../../models/type'
import type { TUser } from '@/modules/admin-user/models/type'
import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TSchedule } from '@/modules/admin-schedule/models/type'

export const state: Ref<TRecord> = ref({} as TRecord)
export const selectedAnamnesis: Ref<string[]> = ref([])
export const otherAnamnesis: Ref<string> = ref('')
export const anamnesis = ['Tăng huyết áp', 'Viêm gan', 'Đái tháo đường']
export const doctors: Ref<TUser[]> = ref([])
export const patients: Ref<TUser[]> = ref([])
export const schedules: Ref<TSchedule[]> = ref([])
export const searchPatient: Ref<string> = ref('')
export const searchSchedule: Ref<string> = ref('')
export const searchDoctor: Ref<string> = ref('')
export const pagination: Ref<TPagination> = ref({} as TPagination)

export const fetchPatients = async (value?: string) => {
  
    const options = { ...paginationOptions.value, value: value || searchPatient.value }

    get<TPaginationResponse<TUser>>(`/api/users/role/customer/search`, options).then((response) => {
        if (response?.data) {
            const { data, ...page } = response.data
            patients.value = data
            pagination.value = page
        }
    })
    
}

export const fetchDoctors = async (value?: string) => {
    
    const options = { ...paginationOptions.value, value: value || searchDoctor.value }

    get<TPaginationResponse<TUser>>(`/api/users/role/doctor/search`, options).then((response) => {
        if (response?.data) {
            const { data, ...page } = response.data
            doctors.value = data
            pagination.value = page
        }   
    })
}

export const fetchSchedule = async (value?: string) => {
    
    const options = { ...paginationOptions.value, search: value || searchSchedule.value }

    get<TPaginationResponse<TSchedule>>(`/api/schedules/page`, options).then((response) => {
        if (response?.data) {
            const { data, ...page } = response.data
            schedules.value = data
            pagination.value = page
        }
    })
}

export const debouncedPatient = useDebounceFn(async () => {
    await fetchPatients()
}, 600, { maxWait: 5000 })

export const debouncedDoctor = useDebounceFn(async () => {
    await fetchPatients()
}, 600, { maxWait: 5000 })

export const debouncedSchedule = useDebounceFn(async () => {
    await fetchSchedule()
}, 600, { maxWait: 5000 })


export const fetch = async (id: string): Promise<void> => {
  get<TRecord>('/api/healthrecords/' + id).then((response) => {
    if (response?.data) {
      state.value = response.data
    }
  })
}


export const submit = async () => {
  const data = await put<any, any>('/api/healthrecords/' + state.value.id, state.value)
  if (data?.data) {
    successNotification(data.message)
  }
}

watch(selectedAnamnesis, (newValue) => {
    state.value.anamnesis = newValue.join(', ');
})

watch(otherAnamnesis, (newValue) => {
    state.value.anamnesis = newValue;
})