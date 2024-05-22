import { ref, watch } from 'vue'
import Swal from 'sweetalert2'

import { get, post } from '@/core/services/helpers/fetcher.helper'
import { socket } from '@/core/services/helpers/socket.helper'
import { datetimeToTimeJSON } from '@/core/services/utils/util.datetime'
import { resetObject } from '@/core/services/utils/util.object'

import type { Ref } from "vue"
import type { TBranch } from '@/modules/admin-branch/models/type'
import type { TScheduleRequest } from '@/modules/admin-schedule/models/type'
import type { TPaginationResponse } from '@/core/models/type'
import type { TService } from '@/modules/admin-service/models/type'
import { StatusEnum } from '@/core/models/enum'

const init_state: TScheduleRequest = {
    email: '',
    date: new Date(),
    desc: '',
    fullName: '',
    phoneNumber: '',
    time: '',
    serviceId: '-1',
    branchId: '-1',
    status: StatusEnum.Pending
}

export const services: Ref<TService[]> = ref([])
export const branches: Ref<TBranch[]> = ref([])
export const dateTime: Ref<Date> = ref(new Date())
export const state: Ref<TScheduleRequest> = ref({...init_state})

export const submit = async () => {
    await post('/api/schedules', state.value).then(async() => {
        await post('/api/email/schedule',{email:state.value.email,template:state.value.phoneNumber})
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
