import { ref } from 'vue'

import { EnableEnum } from '@/core/models/enum'

import type { Header } from 'vue3-easy-data-table'
import type { TPagination, TPaginationRequest } from '@/core/models/type'
import type { Rules } from 'async-validator'

export const headers: Header[] = [
  { text: 'table.id', value: 'id', width: 100 },
  { text: 'table.fullName', value: 'fullName', sortable: true },
  { text: 'table.email', value: 'email' },
  { text: 'table.imageUrl', value: 'imageUrl' },
  { text: 'table.phoneNumber', value: 'phoneNumber' },
  { text: 'table.address', value: 'address' },
  { text: 'table.enable', value: 'enable' },
  { text: 'table.createdAt', value: 'createdAt' },
  { text: 'table.updatedAt', value: 'updatedAt' },
  { text: 'table.action', value: 'action' }
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
  email: {
    type: 'email',
    min: 5,
    max: 255,
    required: true
  },
  fullName: {
    type: 'string',
    min: 5,
    max: 255,
    required: true
  },
  phoneNumber: {
    type: 'string',
    min: 10,
    max: 15,
    required: true
  },
  address: {
    type: 'string',
    min: 5,
    required: true
  },
  imageUrl: {
    type: 'string',
    min: 5,
    required: true
  }
}