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
import type { TTreatmentPlant } from '@/modules/admin-treatment/models/type'
import { StatusEnum } from '@/core/models/enum'

const init_state: TPrescriptionDetailRequest = {
  id: v4(),
  prescriptionId: '-1',
  usage: '',
  medicineId: '-1',
  quantity: 1,
}

const init_prescription: TPrescriptionRequest = {
  doctorId: '-1',
  patientId: '-1',
  treatmentId: '-1',
  id: v4(),
  status: StatusEnum.Accepted
}

export const state = ref<TPrescriptionDetailRequest>({ ...init_state })
export const prescription = ref<TPrescriptionRequest>({ ...init_prescription })

export const prescriptions: Ref<TPrescriptionDetailRequest[]> = ref([])

export const patients: Ref<TUser[]> = ref([])
export const searchPatient: Ref<string> = ref('')

export const treatments: Ref<TTreatmentPlant[]> = ref([])
export const searchTreatment: Ref<string> = ref('')

export const medicines: Ref<TMedicine[]> = ref([])
export const medicineSearch: Ref<string> = ref('')

export const medicinePagination: Ref<TPagination> = ref({} as TPagination)
export const userPagination: Ref<TPagination> = ref({} as TPagination)
export const pagination = ref<TPagination>({ ...init_pagination })

export const fetchMedicines = async (value: string) => {
  searchPatient.value = value
  const options = { ...paginationOptions.value, search: medicineSearch.value }

  get<TPaginationResponse<TMedicine>>(`/api/medicines/page`, options).then((response) => {
    if (response?.data) {
      const { data, ...page } = response.data
      medicines.value = data
      medicinePagination.value = page
    }
  })
}

export const fetchPatients = async (value: string): Promise<void> => {
  searchPatient.value = value
  const options = { ...paginationOptions.value, value: searchPatient.value }

  get<TPaginationResponse<TUser>>(`/api/users/role/customer/search`, options).then((response) => {
    if (response?.data) {
      const { data, ...page } = response.data
      patients.value = data
      userPagination.value = page
    }
  })
}

export const fetchTreatments = async (value: string): Promise<void> => {
  searchTreatment.value = value
  const options = { ...paginationOptions.value, value: searchTreatment.value }

  get<TPaginationResponse<TTreatmentPlant>>(`/api/treatmentplants/page`, options).then((response) => {
    if (response?.data) {
      const { data, ...page } = response.data
      treatments.value = data
      userPagination.value = page
    }
  })
}

export const debouncedPatient = useDebounceFn(async () => {
  await fetchPatients(searchTreatment.value)
}, 600, { maxWait: 5000 })

export const debouncedTreatment = useDebounceFn(async () => {
  await fetchTreatments(searchTreatment.value)
}, 600, { maxWait: 5000 })

export const debouncedMedicine = useDebounceFn(async () => {
  await fetchMedicines('')
}, 600, { maxWait: 5000 })

export const submit = () => {
  const medicine = medicines.value?.find((item) => item.id === state.value.medicineId)

  state.value.medicine = medicine

  prescriptions.value.push(state.value)

  state.value = init_state
}

export const submitPrescription = async (doctorId: string) => {
  const { id } = prescription.value
  const payload = {
      ...prescription.value,
      doctorId
  }
  
  await post<TPrescriptionRequest, TPrescription>('/api/prescriptions', payload).then(response => {
    if (response?.data) {
      successNotification(response.message)
      resetObject(prescription, init_prescription)
    }
  })

  prescriptions.value.forEach(async data => {
    data.prescriptionId = id
    await post<TPrescriptionRequest, TPrescription>('/api/prescriptiondetails', data)
  })
}
