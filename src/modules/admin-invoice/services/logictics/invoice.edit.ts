import { ref, watch, type Ref } from "vue"

import { successNotification } from "@/core/services/helpers/alert.helper"
import { del, get, post, put } from "@/core/services/helpers/request.helper"

import type { TInvoice, TInvoiceDetailRequest, TInvoiceDetailResponse, TInvoiceRequest, TServicePrice } from "../../models/type"
import type { TPagination, TPaginationResponse } from "@/core/models/type"
import type { TUser } from "@/modules/admin-user/models/type"
import { paginationOptions } from "../data/invoice"
import { useDebounceFn } from "@vueuse/core"
import type { TRecord } from "@/modules/admin-medicine/models/type"
import { v4 } from "uuid"

export const state: Ref<TInvoice> = ref({} as TInvoice)
export const nurseSearch = ref('')
export const nurses: Ref<TUser[]> = ref([])
export const healthRecords: Ref<TRecord[]> = ref([])
export const nursePagination: Ref<TPagination> = ref({} as TPagination)
export const pagination: Ref<TPagination> = ref({} as TPagination)
export const selectedServices: Ref<TServicePrice[]> = ref([])
export const servicePrices: Ref<TServicePrice[]> = ref([])
export const fetchedServicePrice: Ref<TServicePrice[]> = ref([])
export const oldDetail: Ref<TServicePrice[]> = ref([])

export const submit = async () => {
    const id = v4()

    const payload = { ...state, id }

    await put<TInvoiceRequest, TInvoice>('/api/invoices', payload).then(response => {
        if (response?.data) {
            successNotification(response.message)
        }
    })

    oldDetail.value.forEach(async detail => {
        await del('/api/invoicedetails/' + detail.id)
    })

    selectedServices.value.forEach(async service => {
        const payload: TInvoiceDetailRequest = {
            invoiceId: id,
            servicePriceId: service.id
        }
        await post('/api/invoicedetails', payload)
    })
}

export const fetchHealthRecord = async (id: string) => {

    const options = { ...pagination.value }

    get<TPaginationResponse<TRecord>>(`/api/healthrecords/user/` + id, options).then((response) => {
        if (response?.data) {
            const { data, ...page } = response.data
            healthRecords.value = data
            pagination.value = page
        }
    })
}

export const fetchServicePrices = async () => {

    get<TServicePrice[]>('/api/serviceprices').then((response) => {
        if (response?.data) {
            servicePrices.value = response.data
        }
    })
}


export const fetchNurses = async () => {

    const options = { ...paginationOptions.value, value: nurseSearch.value }

    get<TPaginationResponse<TUser>>(`/api/users/role/nurse/search`, options).then((response) => {
        if (response?.data) {
            const { data, ...page } = response.data
            nurses.value = data
            nursePagination.value = page
        }
    })
}

export const fetch = async (id: string) => {
    get<TInvoice>(`/api/invoices/` + id).then((response) => {
        if (response?.data) {
            state.value = response.data
        }
    })
}

export const fetchedService = async (id: string) => {
    get<TInvoiceDetailResponse[]>(`/api/invoicedetails/invoice/` + id).then((response) => {
        if (response?.data) {
            fetchedServicePrice.value = response.data.map(item => item.servicePrice)
            oldDetail.value = response.data.map(item => item.servicePrice)
        }
    })
}

export const debouncedNurses = useDebounceFn(async () => {
    await fetchNurses()
}, 600, { maxWait: 5000 })

watch(() => state.value.patientId, async (newValue) => {
    if (newValue !== '-1')
        await fetchHealthRecord(newValue)
})

watch(() => selectedServices.value, () => {
    const total = selectedServices.value.reduce((total: number, service: TServicePrice) => total + Math.round(service.price), 0)
    state.value.total = Math.round(total * 1.1)
    state.value.tax = 0.1 * total
}, { deep: true })

watch(
    fetchedServicePrice,
    (newValue) => {
        selectedServices.value = [...newValue]
    },
    { deep: true }
)