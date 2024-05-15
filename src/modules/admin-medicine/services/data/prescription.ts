import { ref } from 'vue'

import { EnableEnum } from '@/core/models/enum'

import type { Header } from 'vue3-easy-data-table'
import type { TPagination, TPaginationRequest } from '@/core/models/type'
import type { Rules } from 'async-validator'

export const headers: Header[] = [
  { text: 'table.title', value: 'medicine.title' },
  { text: 'table.brand', value: 'medicine.brand', sortable: true },
  { text: 'table.quantity', value: 'quantity' },
  { text: 'table.usage', value: 'usage' },
  { text: 'table.delete', value: 'delete' }
]

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

export const rules: Rules = {
  patientId: {
    type: 'string',
    min: 5,
    required: true
  },
}