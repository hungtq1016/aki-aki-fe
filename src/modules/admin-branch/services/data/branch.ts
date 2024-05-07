import { ref } from "vue";

import { EnableEnum } from "@/core/models/enum";

import type { Header } from "vue3-easy-data-table";
import type { TPagination, TPaginationRequest } from "@/core/models/type";

export const headers: Header[] = [
    { text: "table.id", value: "id", width: 100 },
    { text: "table.name", value: "name", sortable: true },
    { text: "table.type", value: "type" },
    { text: "table.address", value: "address" },
    { text: "table.phone", value: "phone" },
    { text: "table.createdAt", value: "createdAt" },
    { text: "table.updatedAt", value: "updatedAt" },
];

export const paginationOptions = ref<TPaginationRequest>({
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