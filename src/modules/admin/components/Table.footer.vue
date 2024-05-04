<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div class="flex items-center justify-between border-t border-black-haze-500 bg-white py-3 ">
        <div class="flex flex-1 justify-between sm:hidden">
            <a href="#"
                class="relative inline-flex items-center rounded-md border border-alabaster-500 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
            <a href="#"
                class="relative ml-3 inline-flex items-center rounded-md border border-alabaster-500 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div class="flex items-center gap-x-1">
                <p class="text-sm text-gray-700">
                    {{ $t('table.show', {
                        from: pagination.pageSize * (pagination.pageNumber - 1) + 1,
                        to: Math.min(pagination.pageSize * pagination.pageNumber, pagination.totalRecords),
                        total: pagination.totalRecords
                    }) }}
                </p>
                <select v-model="pagination.pageSize" @change="() => { paginationOptions.pageSize = pagination.pageSize }"
                    class="inline-flex justify-center gap-x-1.5 rounded-md bg-white py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-alabaster-500 hover:bg-gray-50">
                    <option v-for="total in totalOptions" :value="total" :key="total">{{ total }}</option>
                </select>
            </div>
            <div>
                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <button type="button" :disabled="pagination.firstPage === pagination.pageNumber"
                        @click="() => { paginationOptions.pageNumber = pagination.firstPage }"
                        class="disabled:bg-gray-50 relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-alabaster-500 hover:bg-gray-50 focus:z-[1] focus:outline-offset-0">
                        <span class="sr-only">First</span>
                        <ChevronDoubleLeftIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button type="button" :disabled="pagination.previousPage === pagination.pageNumber"
                        @click="() => { paginationOptions.pageNumber = pagination.previousPage }"
                        class="disabled:bg-gray-50 relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-alabaster-500 hover:bg-gray-50 focus:z-[1] focus:outline-offset-0">
                        <span class="sr-only">Previous</span>
                        <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button v-for="page in pagination.totalPages" :key="page" :disabled="page === pagination.pageNumber"
                        @click="() => { paginationOptions.pageNumber = page }"
                        class="disabled:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-alabaster-500 hover:bg-gray-50 focus:z-[1] focus:outline-offset-0">
                        {{ page }}
                    </button>
                    <button type="button" :disabled="pagination.nextPage === pagination.pageNumber"
                        @click="() => { paginationOptions.pageNumber = pagination.nextPage }"
                        class="disabled:bg-gray-50 relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-alabaster-500 hover:bg-gray-50 focus:z-[1] focus:outline-offset-0">
                        <span class="sr-only">Next</span>
                        <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button type="button" :disabled="pagination.lastPage === pagination.pageNumber"
                        @click="() => { paginationOptions.pageNumber = pagination.lastPage }"
                        class="disabled:bg-gray-50 relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-alabaster-500 hover:bg-gray-50 focus:z-[1] focus:outline-offset-0">
                        <span class="sr-only">First</span>
                        <ChevronDoubleRightIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/vue/24/solid'

import type { TPagination, tPaginationRequest } from '@/core/models/type';

defineProps<{
    pagination: TPagination,
    paginationOptions: tPaginationRequest
}>()

const totalOptions: number[] = [5, 10, 25, 50, 100]

</script>