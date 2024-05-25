
import { ref, watch } from 'vue'
import { useDebounceFn } from "@vueuse/core"

import { paginationOptions } from "../data/record"
import { get, post } from "@/core/services/helpers/request.helper"
import { resetObject } from '@/core/services/utils/util.object'
import { successNotification } from '@/core/services/helpers/alert.helper'

import type { TPagination, TPaginationResponse } from "@/core/models/type"
import type { TUser } from "@/modules/admin-oauth2/models/type"
import type { Ref } from "vue"
import type { TRecord, TRecordRequest } from '../../models/type'
import { StatusEnum } from '@/core/models/enum'
import type { TSchedule } from '@/modules/admin-schedule/models/type'
import { v4 } from 'uuid'

const init_state: TRecordRequest = {
    id: v4(),
    status: StatusEnum.Active,
    birthDay: '',
    gender: '-1',
    address: '',
    height: 160,
    weight: 60,
    scheduleId:'',
    bloodPressure: 120,
    temperature: 37,
    heartBeat: 80,
    anamnesis: '',
    diagnosis: '',
    patientId: '-1',
    doctorId: '-1',
}

export const state: Ref<TRecordRequest> = ref({...init_state})
export const selectedAnamnesis: Ref<string[]> = ref([])
export const otherAnamnesis: Ref<string> = ref('')
export const anamnesis = ['Tăng huyết áp', 'Viêm gan', 'Đái tháo đường','Động kinh','Hạ huyết áp','Đau đầu']
export const doctors: Ref<TUser[]> = ref([])
export const patients: Ref<TUser[]> = ref([])
export const schedules: Ref<TSchedule[]> = ref([])
export const searchPatient: Ref<string> = ref('')
export const searchSchedule: Ref<string> = ref('')
export const searchDoctor: Ref<string> = ref('')
export const pagination: Ref<TPagination> = ref({} as TPagination)

export const fetchPatients = async (value: string) => {
    searchPatient.value = value
    const options = { ...paginationOptions.value, value: searchPatient.value }
        
    get<TPaginationResponse<TUser>>(`/api/users/role/customer/search`, options).then((response) => {
        if (response?.data) {
            const { data, ...page } = response.data
            patients.value = data
            pagination.value = page
        }
    })
    
}

export const fetchDoctors = async (value: string) => {
    searchDoctor.value = value
    const options = { ...paginationOptions.value, value: searchDoctor.value }

    get<TPaginationResponse<TUser>>(`/api/users/role/doctor/search`, options).then((response) => {
        if (response?.data) {
            const { data, ...page } = response.data
            doctors.value = data
            pagination.value = page
        }   
    })
}

export const fetchSchedule = async (value: string) => {
    searchSchedule.value = value
    const options = { ...paginationOptions.value, search: searchSchedule.value }

    get<TPaginationResponse<TSchedule>>(`/api/schedules/page`, options).then((response) => {
        if (response?.data) {
            const { data, ...page } = response.data
            schedules.value = data
            pagination.value = page
        }
    })
}

export const debouncedPatient = useDebounceFn(async () => {
    await fetchPatients(searchPatient.value)
}, 600, { maxWait: 5000 })

export const debouncedDoctor = useDebounceFn(async () => {
    await fetchPatients(searchPatient.value)
}, 600, { maxWait: 5000 })

export const debouncedSchedule = useDebounceFn(async () => {
    await fetchSchedule(searchSchedule.value)
}, 600, { maxWait: 5000 })

export const submit = async () => {
    post<TRecordRequest, TRecord>('/api/healthrecords', state.value).then(response => {
        if (response?.data) {
            resetObject(state, init_state)
            successNotification(response.message)
        }
    })
}

watch(selectedAnamnesis, (newValue) => {
    state.value.anamnesis = newValue.join(', ');
})

watch(otherAnamnesis, (newValue) => {
    state.value.anamnesis = newValue;
})