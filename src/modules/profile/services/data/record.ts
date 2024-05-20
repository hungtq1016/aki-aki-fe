import { ref } from 'vue'

import { StatusEnum } from '@/core/models/enum'

import type { Header } from 'vue3-easy-data-table'
import type { TPagination, TPaginationRequest } from '@/core/models/type'

export const headers: Header[] = [
  { text: 'table.height', value: 'height' },
  { text: 'table.weight', value: 'weight' },
  { text: 'table.bloodPressure', value: 'bloodPressure' },
  { text: 'table.temperature', value: 'temperature' },
  { text: 'table.heartBeat', value: 'heartBeat'},
  { text: 'table.anamnesis', value: 'anamnesis' },
  { text: 'table.diagnosis', value: 'diagnosis' },
  { text: 'table.createdAt', value: 'createdAt' },
  { text: 'table.view', value: 'view' },
]

export type TClientRequest = {
  startFrom: string;
  endFrom: string;
  heartBeat: number;
  bloodPressure: number;
}

export const paginationOptions = ref<TPaginationRequest>({
  pageNumber: 1,
  pageSize: 10,
  status: StatusEnum.Active
})

export const init_pagination: TPagination = {
  pageNumber: 1,
  pageSize: 10,
  firstPage: 1,
  lastPage: 1,
  totalPages: 0,
  totalRecords: 0,
  nextPage: 1,
  previousPage: 1
}
