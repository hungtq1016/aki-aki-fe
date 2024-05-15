import { successNotification } from "@/core/services/helpers/alert.helper"
import { get, put } from "@/core/services/helpers/request.helper"

import { ref } from "vue"

import type { Ref } from "vue"

import type { TUser } from "@/modules/admin-user/models/type"

export const state: Ref<TUser> = ref({} as TUser)

export const fetch = async (id: string): Promise<void> => {
    get<TUser>('/api/users/' + id).then((response) => {
        if (response?.data) {
            state.value = response.data
        }
    })
}

export const submit = async () => {
    const data = await put<any, any>('/api/users/' + state.value.id, state.value)
    if (data?.data) {
        successNotification(data.message)
    }
}