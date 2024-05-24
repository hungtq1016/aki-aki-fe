import { ref } from 'vue'

import { StatusEnum } from '@/core/models/enum'

import type { Header } from 'vue3-easy-data-table'
import type { TPagination, TPaginationRequest } from '@/core/models/type'
import type { Rules } from 'async-validator'

export const headers: Header[] = [
  { text: 'table.id', value: 'id', width: 100 },
  { text: 'table.email', value: 'email' },
  { text: 'table.date', value: 'date' },
  { text: 'table.time', value: 'time' },
  { text: 'table.status', value: 'status' },
  { text: 'table.createdAt', value: 'createdAt' },
  { text: 'table.updatedAt', value: 'updatedAt' },
  { text: 'table.createHR', value: 'createHR' },
  { text: 'table.action', value: 'action' }
]

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

export const rules: Rules = {
  email: {
    type: 'string',
    min: 5,
    required: true
  },
  date: {
    type: 'date',
    required: true
  },
  time: {
    type: 'string',
    min: 5,
    required: true
  },
  serviceId: {
    type: 'string',
    min: 5,
    required: true
  },
  branchId: {
    type: 'string',
    min: 5,
    required: true
  }
}