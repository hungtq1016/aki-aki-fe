import { StatusEnum } from "@/core/models/enum"
import type { TPagination, TPaginationRequest } from "@/core/models/type"
import { ref } from "vue"

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