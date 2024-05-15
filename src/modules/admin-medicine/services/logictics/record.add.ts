
import { ref, watch } from 'vue'
import { useDebounceFn } from "@vueuse/core"

import { paginationOptions } from "../data/record"
import { get } from "@/core/services/helpers/request.helper"

import type { TPagination, TPaginationResponse } from "@/core/models/type"
import type { TUser } from "@/modules/admin-oauth2/models/type"
import type { Ref } from "vue"

const init_state = {
    enable: true,
    fullName: '',
    birthDay: '',
    gender: '-1',
    address: '',
    height: 0,
    weight: 0,
    bloodPressure: 0,
    temperature: 37,
    heartBeat: 0,
    anamnesis: [] as string[],
    createdAt: new Date(),
    diagnosis: '',
    userId: '-1'
}

export const state = ref(init_state)
export const other = ref('')
export const anamnesis = ['Tăng huyết áp', 'Viêm gan', 'Đái tháo đường']
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

export const submit = () => {

}

watch(other, (newValue) => {
    state.value.anamnesis = newValue.split(',').map(str => str.trim());
})