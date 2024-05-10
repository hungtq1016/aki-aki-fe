import { ref } from 'vue'

import { EnableEnum } from '@/core/models/enum'

import type { Header } from 'vue3-easy-data-table'
import type { TPagination, TPaginationRequest } from '@/core/models/type'

export const headers: Header[] = [
  { text: 'table.id', value: 'id', width: 100 },
  { text: 'table.title', value: 'title', sortable: true },
  { text: 'table.content', value: 'content' },
  { text: 'table.groupId', value: 'group' },
  { text: 'table.imageUrl', value: 'imangeUrl' },
  { text: 'table.slug', value: 'slug' },
  { text: 'table.createdAt', value: 'createdAt' },
  { text: 'table.updatedAt', value: 'updatedAt' }
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
