import { ref } from "vue";

import { EnableEnum } from "@/core/models/enum";

import type { Header } from "vue3-easy-data-table";
import type { TPagination, tPaginationRequest } from "@/core/models/type";

export const headers: Header[] = [
    { text: "table.id", value: "BlogId", width: 100 },
    { text: "table.title", value: "Title", sortable: true },
    { text: "table.content", value: "content" },
    { text: "table.public_date", value: "PublicDate" },
    { text: "table.createdAt", value: "createdAt" },
    { text: "table.updatedAt", value: "updatedAt" },
    { text: "table.Author", value: "Author" },
];

export const paginationOptions = ref<tPaginationRequest>({
    pageNumber: 1,
    pageSize: 10,
    enable: EnableEnum.ALL
});

export const init_pagination: TPagination = {
    pageNumber: 1,
    pageSize: 10,
    firstPage: 1,
    lastPage: 1,
    totalPages: 0,
    totalRecords: 0,
    nextPage: 1,
    previousPage: 1,
}