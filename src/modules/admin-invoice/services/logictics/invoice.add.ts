import { reactive, ref, watch, type Ref } from "vue"

import { successNotification } from "@/core/services/helpers/alert.helper"
import { get, post } from "@/core/services/helpers/request.helper"
import { resetObject } from "@/core/services/utils/util.object"

import type { TInvoice, TInvoiceDetailRequest, TInvoiceRequest, TServicePrice } from "../../models/type"
import type { TPagination, TPaginationResponse } from "@/core/models/type"
import type { TUser } from "@/modules/admin-user/models/type"
import { paginationOptions } from "../data/invoice"
import { useDebounceFn } from "@vueuse/core"
import type { TRecord } from "@/modules/admin-medicine/models/type"
import { v4 } from "uuid"


const init_state: TInvoiceRequest = {
    total: 0,
    tax: 0,
    healthRecordId: '-1',
    nurseId: '-1',
    patientId: '-1',
    enable: true
}

export const state = reactive<TInvoiceRequest>({ ...init_state })
export const customerSearch = ref('')
export const nurseSearch = ref('')
export const customers: Ref<TUser[]> = ref([])
export const nurses: Ref<TUser[]> = ref([])
export const healthRecords: Ref<TRecord[]> = ref([])
export const customerPagination: Ref<TPagination> = ref({} as TPagination)
export const nursePagination: Ref<TPagination> = ref({} as TPagination)
export const pagination: Ref<TPagination> = ref({} as TPagination)
export const selectedServices: Ref<TServicePrice[]> = ref([])
export const servicePrices: Ref<TServicePrice[]> = ref([])

export const submit = async () => {
    const id = v4()

    const payload = { ...state, id }

    await post<TInvoiceRequest, TInvoice>('/api/invoices', payload).then(response => {
        if (response?.data) {
            successNotification(response.message),
                resetObject(state, init_state)
        }
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

export const fetchCustomers = async () => {

    const options = { ...paginationOptions.value, value: customerSearch.value }

    get<TPaginationResponse<TUser>>(`/api/users/role/customer/search`, options).then((response) => {
        if (response?.data) {
            const { data, ...page } = response.data
            customers.value = data
            customerPagination.value = page
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

export const debouncedNurses = useDebounceFn(async () => {
    await fetchNurses()
}, 600, { maxWait: 5000 })

export const debouncedCustomers = useDebounceFn(async () => {
    await fetchCustomers()
}, 600, { maxWait: 5000 })

watch(() => state.patientId, async (newValue) => {
    if(newValue !== '-1')
    await fetchHealthRecord(newValue)
    selectedServices.value = []
})

watch(() => selectedServices.value, () => {
    const total = selectedServices.value.reduce((total: number, service: TServicePrice) => total + Math.round(service.price), 0)
    state.total = Math.round(total * 1.1)
    state.tax = 0.1 * total
}, { deep: true })