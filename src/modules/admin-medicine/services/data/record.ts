import { ref } from 'vue'

import { StatusEnum } from '@/core/models/enum'

import type { Header } from 'vue3-easy-data-table'
import type { TPagination, TPaginationRequest } from '@/core/models/type'
import type { Rules } from 'async-validator'

export const headers: Header[] = [
  { text: 'table.id', value: 'id' },
  { text: 'table.gender', value: 'gender' },
  { text: 'table.userId', value: 'userId'},
  { text: 'table.address', value: 'address' },
  { text: 'table.height', value: 'height' },
  { text: 'table.weight', value: 'weight' },
  { text: 'table.bloodPressure', value: 'bloodPressure' },
  { text: 'table.temperature', value: 'temperature' },
  { text: 'table.heartBeat', value: 'heartBeat'},
  { text: 'table.anamnesis', value: 'anamnesis' },
  { text: 'table.diagnosis', value: 'diagnosis' },
  { text: 'table.status', value: 'status' },
  { text: 'table.createdAt', value: 'createdAt' },
  { text: 'table.updatedAt', value: 'updatedAt' },
  { text: 'table.action', value: 'action' },
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
  birthDay: {
    type: 'string',
    min: 5,
    required: true
  },
  gender: {
    type: 'string',
    required: true
  },
  address: {
    type: 'string',
    min: 1,
    required: true
  },
  height: {
    type: 'number',
    required: true
  },
  weight: {
    type: 'number',
    required: true
  },
  bloodPressure: {
    type: 'number',
    required: true
  },
  temperature: {
    type: 'number',
    required: true
  },
  heartBeat: {
    type: 'number',
    required: true
  },
  diagnosis: {
    type: 'string',
    min: 5,
    required: true
  },
  userId: {
    type: 'string',
    min: 5,
    required: true
  }
}