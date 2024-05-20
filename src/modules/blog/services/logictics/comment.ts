import { get, post } from '@/core/services/helpers/fetcher.helper'
import type { TCommentRequest, TCommentResponse } from '../../models/type'
import { ref, type Ref } from 'vue'
import type { TPagination, TPaginationRequest, TPaginationResponse } from '@/core/models/type'
import { StatusEnum } from '@/core/models/enum'

export const comments: Ref<TCommentResponse[]> = ref([])

export const init_pagination: TPagination = {
  pageNumber: 1,
  pageSize: 5,
  firstPage: 1,
  lastPage: 1,
  totalPages: 0,
  totalRecords: 0,
  nextPage: 1,
  previousPage: 1
}
export const content: Ref<string> = ref('')
export const pagination = ref<TPagination>({ ...init_pagination })
export const isLoading: Ref<boolean> = ref(false)
export const isLast: Ref<boolean> = ref(false)

export const paginationOptions = ref<TPaginationRequest>({
  pageNumber: 1,
  pageSize: 5,
  status: StatusEnum.Active
})
export const fetch = async (blogId: string): Promise<void> => {
  if (!isLast.value) {
    isLoading.value = true

    get<TPaginationResponse<TCommentResponse>>(
      '/api/comments/blog/' + blogId,
      paginationOptions.value
    )
      .then((response) => {
        if (response?.data) {
          const { data, ...page } = response.data
          comments.value = [...comments.value, ...data]
          pagination.value = page
          paginationOptions.value.pageNumber = pagination.value.nextPage

          isLast.value = pagination.value.pageNumber === pagination.value.lastPage
        }
      })
      .finally(() => (isLoading.value = false))
  }
}

export const submit = async (payload: TCommentRequest): Promise<void> => {
  post<TCommentRequest, TCommentResponse>('/api/comments', payload).then((response) => {
    if (response?.data) {
      comments.value = [...comments.value, response.data]
    }
  })
}
