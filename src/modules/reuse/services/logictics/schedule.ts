import { ref, watch } from 'vue'
import Swal from 'sweetalert2'

import { get, post } from '@/core/services/helpers/fetcher.helper'
import { socket } from '@/core/services/helpers/socket.helper'
import { datetimeToTimeJSON } from '@/core/services/utils/util.datetime'
import { resetObject } from '@/core/services/utils/util.object'

import type { Ref } from "vue"
import type { TService } from '../../models/type'
import type { TBranch } from '@/modules/admin-branch/models/type'
import type { TScheduleRequest } from '@/modules/admin-schedule/models/type'
import type { TPaginationResponse } from '@/core/models/type'

const init_state: TScheduleRequest = {
    email: '',
    date: new Date(),
    desc: '',
    fullName: '',
    phoneNumber: '',
    time: '',
    serviceId: '-1',
    branchId: '-1'
}

export const services: Ref<TService[]> = ref([])
export const branches: Ref<TBranch[]> = ref([])
export const dateTime: Ref<Date> = ref(new Date())
export const state: Ref<TScheduleRequest> = ref({...init_state})

export const submit = async () => {
    post('/api/schedules', state.value).then(() => {
        socket.onopen
        socket.send(JSON.stringify({schedule:state.value}))
        Swal.fire({
            title: 'Thành công!',
            text: 'Kiểm tra email của bạn',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        resetObject(state.value,init_state)
    })
}

watch(dateTime, (newValue) => {
    state.value.time = JSON.stringify(datetimeToTimeJSON(newValue))
    state.value.date = newValue
})

export const fetchServices = async () => {

    get<TPaginationResponse<TService>>('/api/services/group/chuyen-khoa?pageNumber=1&pageSize=20&enable=1').then(response => {
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
