import { ref } from 'vue'
import { v4 } from 'uuid'

import type { TMedicine, TPresciption } from '../../models/type'
import { init_pagination } from '../data/prescription'
import type { TPagination } from '@/core/models/type'

export const pagination = ref<TPagination>({ ...init_pagination })

export const submit = () => {
  state.value.medicine = medicines.value?.find((item) => item.id === state.value.medicineId)
  prescriptions.value.push(state.value)
  state.value = init_state
}
const init_state :TPresciption = {
  id: v4(),
  usage: '',
  medicineId: '-1',
  quantity: 1,
  userId: '-1'
}

export const state = ref<TPresciption>({ ...init_state })
export const medicines = ref<TMedicine[]>([])
export const prescriptions = ref<TPresciption[]>([])

export const fetch = async () => {}
