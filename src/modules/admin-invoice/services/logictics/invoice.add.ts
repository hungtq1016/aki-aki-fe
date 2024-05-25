import { reactive, ref, watch, type Ref } from "vue"

import { successNotification } from "@/core/services/helpers/alert.helper"
import { get, post } from "@/core/services/helpers/request.helper"
import { resetObject } from "@/core/services/utils/util.object"

import type { TInvoice, TInvoiceDetailRequest, TInvoiceRequest, TServicePrice } from "../../models/type"
import type { TPagination, TPaginationResponse } from "@/core/models/type"
import type { TUser } from "@/modules/admin-user/models/type"
import { paginationOptions } from "../data/invoice"
import { useDebounceFn } from "@vueuse/core"
import type { TPrescription } from "@/modules/admin-medicine/models/type"
import { v4 } from "uuid"
import { StatusEnum } from "@/core/models/enum"


const init_state: TInvoiceRequest = {
    id: v4(),
    total: 0,
    tax: 0,
    nurseId: '-1',
    patientId: '-1',
    prescriptionId: '-1',
    status: StatusEnum.NotPaid
}

export const state = reactive<TInvoiceRequest>({ ...init_state })

export const nurses: Ref<TUser[]> = ref([])
export const searchNurse = ref('')
export const paginationNurse: Ref<TPagination> = ref({} as TPagination)

export const patients: Ref<TUser[]> = ref([])
export const searchPatient = ref('')
export const paginationPatient: Ref<TPagination> = ref({} as TPagination)

export const prescriptions: Ref<TPrescription[]> = ref([])
export const searchPrescription = ref('')
export const paginationPrescription: Ref<TPagination> = ref({} as TPagination)

export const pagination: Ref<TPagination> = ref({} as TPagination)

export const selectedServices: Ref<TServicePrice[]> = ref([])
export const servicePrices: Ref<TServicePrice[]> = ref([])

export const submit = async () => {
    const { id } = state

    await post<TInvoiceRequest, TInvoice>('/api/invoices', state).then(response => {
        if (response?.data) {
            successNotification(response.message),
            resetObject(state, init_state)
  
            selectedServices.value.forEach(async service => {
                const payload: TInvoiceDetailRequest = {
                    id: v4(),
                    invoiceId: id,
                    servicePriceId: service.id
                }
                await post('/api/invoicedetails', payload)
            })
        }
    }).then(()=>selectedServices.value = [])


}

export const fetchServicePrices = async () => {

    get<TServicePrice[]>('/api/serviceprices').then((response) => {
        if (response?.data) {
            servicePrices.value = response.data
        }
    })
}

export const fetchPatients = async (value: string) => {
    searchPatient.value = value
    const options = { ...paginationOptions.value, value: searchPatient.value }

    get<TPaginationResponse<TUser>>(`/api/users/role/customer/search`, options).then((response) => {
        if (response?.data) {
            const { data, ...page } = response.data
            patients.value = data
            paginationPatient.value = page
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

export const fetchPrescriptions = async (value: string) => {
    searchPrescription.value = value
    const options = { ...paginationOptions.value, search: searchPrescription.value }

    get<TPaginationResponse<TPrescription>>(`/api/prescriptions/page`, options).then((response) => {
        if (response?.data) {
            const { data, ...page } = response.data
            prescriptions.value = data
            paginationPrescription.value = page
        }
    })
}

export const debouncedNurses = useDebounceFn(async () => {
    await fetchNurses(searchNurse.value)
}, 600, { maxWait: 5000 })

export const debouncedPatients = useDebounceFn(async () => {
    await fetchPatients(searchPatient.value)
}, 600, { maxWait: 5000 })

export const debouncedPrescriptions = useDebounceFn(async () => {
    await fetchPrescriptions(searchPrescription.value)
}, 600, { maxWait: 5000 })

watch(() => selectedServices.value, () => {
    const total = selectedServices.value.reduce((total: number, service: TServicePrice) => total + Math.round(service.price), 0)
    state.total = Math.round(total * 1.1)
    state.tax = 0.1 * total
}, { deep: true })