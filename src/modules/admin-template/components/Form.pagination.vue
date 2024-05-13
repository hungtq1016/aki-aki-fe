<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="text-center pt-8.5">
    <nav>
      <ul class="flex gap-x-2 items-center justify-center">
        <li class="page-item disabled" aria-disabled="true" aria-label="&laquo; Previous">
          <button
            type="button"
            :disabled="pagination.firstPage === pagination.pageNumber"
            @click="
              () => {
                paginationOptions.pageNumber = pagination.firstPage
              }
            "
            class="w-10 h-10 text-center flex justify-center items-center bg-gray-100 rounded-full shadow-none text-slate-950 hover:text-white hover:bg-cerulean-600"
            aria-hidden="true"
          >
            &lsaquo;
          </button>
        </li>
        <li v-for="page in pagination.totalPages" :key="page">
          <button
            @click="
              () => {
                paginationOptions.pageNumber = page
              }
            "
            :class="{ active: pagination.pageNumber == page }"
            class="w-10 h-10 text-center flex justify-center items-center bg-gray-100 rounded-full shadow-none text-slate-950 hover:text-white hover:bg-cerulean-600"
          >
            {{ page }}
          </button>
        </li>
        <li class="page-item">
          <button
            :disabled="pagination.nextPage === pagination.pageNumber"
            @click="
              () => {
                paginationOptions.pageNumber = pagination.nextPage
              }
            "
            class="w-10 h-10 text-center flex justify-center items-center bg-gray-100 rounded-full shadow-none text-slate-950 hover:text-white hover:bg-cerulean-600"
            aria-label="Next &raquo;"
          >
            &rsaquo;
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { TPagination, TPaginationRequest } from '@/core/models/type'

defineProps<{
  pagination: TPagination
  paginationOptions: TPaginationRequest
}>()
</script>

<style scoped>
.active {
  @apply text-white bg-cerulean-600;
}
</style>
