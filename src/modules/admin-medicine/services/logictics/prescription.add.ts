import { useDebounceFn } from '@vueuse/core'
import { ref } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../data/prescription'
import { get, post } from '@/core/services/helpers/request.helper'
import { resetObject } from '@/core/services/utils/util.object'
import { successNotification } from '@/core/services/helpers/alert.helper'

import type { Ref } from 'vue'
import type { TUser } from '@/modules/admin-oauth2/models/type'
import type { TMedicine, TPrescription, TPrescriptionDetailRequest, TPrescriptionRequest } from '../../models/type'
import type { TPagination, TPaginationResponse } from '@/core/models/type'

const init_state: TPrescriptionDetailRequest = {
  prescriptionId: '-1',
  usage: '',
  medicineId: '-1',
  quantity: 1,
}

const init_presciption: TPrescriptionRequest = {
  doctorId: '-1',
  patientId: '-1'
}

export const state = ref<TPrescriptionDetailRequest>({ ...init_state })
export const presciption = ref<TPrescriptionRequest>({ ...init_presciption })

export const medicines: Ref<TMedicine[]> = ref([])
export const users: Ref<TUser[]> = ref([])
export const prescriptions: Ref<TPrescriptionDetailRequest[]> = ref([])

export const emailSearch: Ref<string> = ref('')
export const medicineSearch: Ref<string> = ref('')

export const medicinePagination: Ref<TPagination> = ref({} as TPagination)
export const userPagination: Ref<TPagination> = ref({} as TPagination)
export const pagination = ref<TPagination>({ ...init_pagination })

export const fetchMedicines = async () => {

  const options = { ...paginationOptions.value, value: emailSearch.value }

  get<TPaginationResponse<TMedicine>>(`/api/medicines/page`, options).then((response) => {
    if (response?.data) {
      const { data, ...page } = response.data
      medicines.value = data
      medicinePagination.value = page
    }
  })
}

export const fetchUsers = async (value: string): Promise<void> => {
  emailSearch.value = value
  const options = { ...paginationOptions.value, value: emailSearch.value }

  get<TPaginationResponse<TUser>>(`/api/users/role/customer/search`, options).then((response) => {
    if (response?.data) {
      const { data, ...page } = response.data
      users.value = data
      userPagination.value = page
    }
  })
}

export const submit = () => {
  const medicine = medicines.value?.find((item) => item.id === state.value.medicineId)

  state.value.medicine = medicine

  prescriptions.value.push(state.value)

  state.value = init_state
}

export const submitPrescription = async (doctorId: string) => {
  const id = v4()
  const payload = {
      ...presciption.value,
      id: id,
      doctorId
  }
  
  await post<TPrescriptionRequest, TPrescription>('/api/prescriptions', payload).then(response => {
    if (response?.data) {
      successNotification(response.message)
      resetObject(presciption, init_presciption)
    }
  })

  prescriptions.value.forEach(async data => {
    data.prescriptionId = id
    await post<TPrescriptionRequest, TPrescription>('/api/prescriptiondetails', data)
  })
}

export const debouncedMedicine = useDebounceFn(async () => {
  await fetchMedicines()
}, 600, { maxWait: 5000 })

export const debouncedUser = useDebounceFn(async () => {
  await fetchUsers(emailSearch.value)
}, 600, { maxWait: 5000 })