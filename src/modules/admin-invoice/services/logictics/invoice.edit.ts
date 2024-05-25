import { ref, watch, type Ref } from "vue"

import { successNotification } from "@/core/services/helpers/alert.helper"
import { del, get, post, put } from "@/core/services/helpers/request.helper"

import type { TInvoice, TInvoiceDetailRequest, TInvoiceDetailResponse, TInvoiceRequest, TServicePrice } from "../../models/type"
import type { TPagination, TPaginationResponse } from "@/core/models/type"
import type { TUser } from "@/modules/admin-user/models/type"
import { paginationOptions } from "../data/invoice"
import { useDebounceFn } from "@vueuse/core"

export const state: Ref<TInvoice> = ref({} as TInvoice)

export const nurses: Ref<TUser[]> = ref([])
export const searchNurse = ref('')
export const paginationNurse: Ref<TPagination> = ref({} as TPagination)

export const pagination: Ref<TPagination> = ref({} as TPagination)

export const selectedServices: Ref<TServicePrice[]> = ref([])
export const servicePrices: Ref<TServicePrice[]> = ref([])
export const fetchedServicePrice: Ref<TServicePrice[]> = ref([])
export const oldDetail: Ref<TServicePrice[]> = ref([])

export const submit = async () => {

    await put<TInvoiceRequest, TInvoice>('/api/invoices/'+state.value.id, state.value).then(response => {
        if (response?.data) {
            successNotification(response.message)
        }
    })

    oldDetail.value.forEach(async detail => {
        await del('/api/invoicedetails/' + detail.id)
    })

    selectedServices.value.forEach(async service => {
        const payload: TInvoiceDetailRequest = {
            invoiceId: state.value.id,
            servicePriceId: service.id
        }
        await post('/api/invoicedetails', payload)
    })
}

export const fetchServicePrices = async () => {

    get<TServicePrice[]>('/api/serviceprices').then((response) => {
        if (response?.data) {
            servicePrices.value = response.data
        }
    })
}

export const fetchNurses = async (value: string) => {
    searchNurse.value = value
    const options = { ...paginationOptions.value, value: searchNurse.value }

    get<TPaginationResponse<TUser>>(`/api/users/role/nurse/search`, options).then((response) => {
        if (response?.data) {
            const { data, ...page } = response.data
            nurses.value = data
            paginationNurse.value = page
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
    await fetchNurses(searchNurse.value)
}, 600, { maxWait: 5000 })

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