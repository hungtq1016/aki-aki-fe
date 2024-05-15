import { ref } from 'vue'

import { EnableEnum } from '@/core/models/enum'

import type { Header } from 'vue3-easy-data-table'
import type { TPagination, TPaginationRequest } from '@/core/models/type'
import type { Rules } from 'async-validator'

export const headers: Header[] = [
  { text: 'table.id', value: 'id', width: 100 },
  { text: 'table.label', value: 'label', sortable: true },
  { text: 'table.slug', value: 'slug' },
  { text: 'table.imageUrl', value: 'imageUrl' },
  { text: 'table.type', value: 'type' },
  { text: 'table.tag', value: 'tag' },
  { text: 'table.groupId', value: 'groupId' },
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
  label: {
    type: 'string',
    min: 5,
    max: 255,
    required: true
  },
  slug: {
    type: 'string',
    min: 5,
    required: true
  },
  imageUrl: {
    type: 'string',
    min: 5,
    required: true
  },
  tag: {
    type: 'string',
    min: 1,
    required: true
  },
  groupId: {
    type: 'string',
    min: 5,
    required: true
  }
}

export const tags = [
  {
    id:'none',
    name:'none'
  },
  {
    id:'url',
    name:'url'
  },
  {
    id: 'a-tag',
    name: 'a-tag'
  },
  {
    id: 'router-link',
    name: 'router-link'
  }
]

export const types = [
  {
    id:'',
    name:'url'
  },
  {
    id:'tel:',
    name:'phone'
  },
  {
    id: 'mailto:',
    name: 'email'
  }
]