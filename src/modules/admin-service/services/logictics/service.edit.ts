import { ref } from 'vue'

import { successNotification } from "@/core/services/helpers/alert.helper"
import { put } from "@/core/services/helpers/request.helper"

import type { TServiceResponse } from "../../models/type"
import type { Ref } from "vue"

export const state: Ref<TServiceResponse> = ref({} as TServiceResponse)

export const submit = async () => {
    const data = await put<any, any>('/api/services/' + state.value.id, state.value)
    if (data?.data) {
        successNotification(data.message)
    }
}