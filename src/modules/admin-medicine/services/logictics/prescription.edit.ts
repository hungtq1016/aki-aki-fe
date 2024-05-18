import { useDebounceFn } from '@vueuse/core'
import { ref } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../data/prescription'
import { post, get, put, del } from '@/core/services/helpers/request.helper'
import { successNotification } from '@/core/services/helpers/alert.helper'

import type { Ref } from 'vue'
import type { TUser } from '@/modules/admin-oauth2/models/type'
import type { TMedicine, TPrescription, TPrescriptionDetail, TPrescriptionDetailRequest, TPrescriptionRequest } from '../../models/type'
import type { TPagination, TPaginationResponse } from '@/core/models/type'


const init_state: TPrescriptionDetailRequest = {
  prescriptionId: '-1',
  usage: '',
  medicineId: '-1',
  quantity: 1,
}

export const state = ref<TPrescriptionDetailRequest>({ ...init_state })
export const prescription = ref<TPrescription>({} as TPrescription)

export const medicines: Ref<TMedicine[]> = ref([])
export const users: Ref<TUser[]> = ref([])
export const prescriptions: Ref<TPrescriptionDetailRequest[]> = ref([])

const oldPrescriptions: Ref<TPrescriptionDetail[]> = ref([])
const newPrescriptions: Ref<TPrescriptionDetailRequest[]> = ref([])

export const emailSearch: Ref<string> = ref('')
export const medicineSearch: Ref<string> = ref('')

export const medicinePagination: Ref<TPagination> = ref({} as TPagination)
export const userPagination: Ref<TPagination> = ref({} as TPagination)
export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async (id: string) => {
  await get<TPrescription>('/api/prescriptions/'+ id).then(response => {
    if (response?.data) {
      prescription.value = response.data
    }
  })
}

export const fetchMedicines = async () => {

  const options = { ...paginationOptions.value, value: medicineSearch.value }

  get<TPaginationResponse<TMedicine>>(`/api/medicines/search`, options).then((response) => {
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

  prescriptions.value = prescriptions.value.concat(newPrescriptions.value);

  oldPrescriptions.value = oldPrescriptions.value.filter(oldPrescription =>
    !newPrescriptions.value.some(newPrescription =>
      newPrescription.id === oldPrescription.id
    )
  )

  state.value = init_state
}

export const fetchPrescriptionDetail = async (id: string) => {

  get<TPrescriptionDetail[]>(`/api/prescriptiondetails/prescription/`+id).then((response) => {
    if (response?.data) {
      oldPrescriptions.value = response.data
      prescriptions.value = oldPrescriptions.value
    }
  })
}

export const submitPrescription = async () => {

  await put<TPrescriptionRequest, TPrescription>('/api/prescriptions/'+ prescription.value.id, prescription).then(response => {
    if (response?.data) {
      successNotification(response.message)
    }
  })

  prescriptions.value.forEach(async data => {
    await del<TPrescriptionRequest, TPrescription>('/api/prescriptiondetails/'+ data.id)
  })

  newPrescriptions.value.forEach(async data => {
    data.prescriptionId = prescription.value.id
    await post<TPrescriptionRequest, TPrescription>('/api/prescriptiondetails',data)
  })
}

export const debouncedMedicine = useDebounceFn(async () => {
  await fetchMedicines()
}, 600, { maxWait: 5000 })

export const debouncedUser = useDebounceFn(async () => {
  await fetchUsers(emailSearch.value)
}, 600, { maxWait: 5000 })