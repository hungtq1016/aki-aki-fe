import { ref } from 'vue'

import { EnableEnum } from '@/core/models/enum'

import type { Header } from 'vue3-easy-data-table'
import type { TPagination, TPaginationRequest } from '@/core/models/type'
import type { Rules } from 'async-validator'

export const headers: Header[] = [
  { text: 'table.id', value: 'id', width: 100 },
  { text: 'table.title', value: 'title', sortable: true },
  { text: 'table.slug', value: 'slug' },
  { text: 'table.imageUrl', value: 'imageUrl' },
  { text: 'table.content', value: 'content' },
  { text: 'table.desc', value: 'desc' },
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
  userId: {
    type: 'string',
    min: 5,
    required: true
  },
  endDay: {
    type: 'string',
    min: 1,
    required: true
  },
  startDay: {
    type: 'string',
    min: 1,
    required: true
  },
  endTime: {
    type: 'string',
    min: 1,
    required: true
  },
  startTime: {
    type: 'string',
    min: 1,
    required: true
  }
}