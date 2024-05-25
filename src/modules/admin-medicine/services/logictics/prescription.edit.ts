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
import type { TTreatmentPlant } from '@/modules/admin-treatment/models/type'


const init_state: TPrescriptionDetailRequest = {
  id: v4(),
  prescriptionId: '-1',
  usage: '',
  medicineId: '-1',
  quantity: 1,
}

export const state = ref<TPrescriptionDetailRequest>({ ...init_state })
export const prescription = ref<TPrescription>({} as TPrescription)

export const prescriptions: Ref<TPrescriptionDetailRequest[]> = ref([])

export const patients: Ref<TUser[]> = ref([])
export const searchPatient: Ref<string> = ref('')

export const treatments: Ref<TTreatmentPlant[]> = ref([])
export const searchTreatment: Ref<string> = ref('')

export const medicines: Ref<TMedicine[]> = ref([])
export const medicineSearch: Ref<string> = ref('')

const oldPrescriptions: Ref<TPrescriptionDetail[]> = ref([])
const newPrescriptions: Ref<TPrescriptionDetailRequest[]> = ref([])

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
  await fetchMedicines()
}, 600, { maxWait: 5000 })

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