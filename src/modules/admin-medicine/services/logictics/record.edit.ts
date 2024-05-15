import { ref, watch, type Ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'

import { get, put } from '@/core/services/helpers/request.helper'
import { paginationOptions } from "../data/record"
import { successNotification } from '@/core/services/helpers/alert.helper'

import type { TRecord } from '../../models/type'
import type { TUser } from '@/modules/admin-user/models/type'
import type { TPagination, TPaginationResponse } from '@/core/models/type'

export const state: Ref<TRecord> = ref({} as TRecord)
export const selectedAnamnesis: Ref<string[]> = ref([])
export const otherAnamnesis: Ref<string> = ref('')
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