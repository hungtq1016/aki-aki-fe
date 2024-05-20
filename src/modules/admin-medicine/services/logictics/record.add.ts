
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

const init_state: TRecordRequest = {
    status: StatusEnum.Active,
    birthDay: '',
    gender: '-1',
    address: '',
    height: 160,
    weight: 60,
    bloodPressure: 120,
    temperature: 37,
    heartBeat: 80,
    anamnesis: '',
    diagnosis: '',
    userId: '-1',
}

export const state: Ref<TRecordRequest> = ref({...init_state})
export const selectedAnamnesis: Ref<string[]> = ref([])
export const otherAnamnesis: Ref<string> = ref('')
export const anamnesis = ['Tăng huyết áp', 'Viêm gan', 'Đái tháo đường','Động kinh','Hạ huyết áp','Đau đầu']
export const users: Ref<TUser[]> = ref([])
export const search: Ref<string> = ref('')
export const pagination: Ref<TPagination> = ref({} as TPagination)

export const fetchUsers = async (value?: string) => {
    search.value = value || ''
    const options = { ...paginationOptions.value, value: search.value }

    get<TPaginationResponse<TUser>>(`/api/users/role/customer/search`, options).then((response) => {
        if (response?.data) {
            const { data, ...page } = response.data
            users.value = data
            pagination.value = page
        }
    })
}

export const debouncedFn = useDebounceFn(async () => {
    await fetchUsers()
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