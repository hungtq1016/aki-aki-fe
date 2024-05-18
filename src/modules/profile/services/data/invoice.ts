import { ref } from 'vue'

import { EnableEnum } from '@/core/models/enum'

import type { Header } from 'vue3-easy-data-table'
import type { TPagination, TPaginationRequest } from '@/core/models/type'

export const headers: Header[] = [
  { text: 'table.nurse', value: 'nurse.name' },
  { text: 'table.total', value: 'total' },
  { text: 'table.tax', value: 'tax' },
  { text: 'table.createdAt', value: 'createdAt' },
  { text: 'table.healthRecordId', value: 'healthRecordId' },
  { text: 'table.view', value: 'view' },
]

export type TClientRequest = {
  startFrom: string;
  endFrom: string;
  total: number;
}

export const paginationOptions = ref<TPaginationRequest>({
  pageNumber: 1,
  pageSize: 10,
  enable: EnableEnum.ALL
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
