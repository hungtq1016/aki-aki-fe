<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5">
    <input
      v-model="search"
      type="text"
      :placeholder="$t('form.place_holder.search')"
      class="dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 w-full rounded-lg border border-gray-100 !bg-gray-50 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50"
    />
  </div>
  <ul class="flex flex-col gap-2">
    <li v-for="(data, index) in list" :key="index">
      <label :for="`checkbox-${index}`">
        <div class="border border-gray-100 relative dark:border-zinc-900 rounded-md">
          <input :disabled="false" :value="data.id"
            class="absolute top-2 right-4 w-4 h-4 peer text-cerulean-600 bg-gray-100 border-gray-300 rounded checked:accent-cerulean-600"
            type="radio" v-model="id" :id="`checkbox-${index}`" />
          <div
            class="flex justify-between px-4 py-2 bg-gray-100 peer-checked:bg-cerulean-100 dark:peer-checked:!bg-slate-950 dark:bg-zinc-950">
            <div class="flex gap-x-1 items-center capitalize text-gray-950 text-sm font-semibold dark:text-gray-50">
              {{ data.email || data.title }}
            </div>
          </div>
          <div
            class="border-t border-gray-100 bg-gray-50 px-4 dark:border-zinc-900 py-2 text-xs text-gray-600 peer-checked:bg-cerulean-50 dark:bg-zinc-800 dark:text-gray-300 dark:peer-checked:!bg-slate-900">
            {{ data.phoneNumber || data.brand }}
          </div>
        </div>
      </label>
    </li>
  </ul>
  <FormPagination v-bind="{ pagination, paginationOptions }" />
</template>

<script setup lang="ts">
import type { TPagination, TPaginationRequest } from '@/core/models/type';
import FormPagination from '@/modules/admin-template/components/Form.pagination.vue'
import { type ModelRef } from 'vue';

const id: ModelRef<string> = defineModel('id',{ required: true })
const search: ModelRef<string> = defineModel('search',{ required: true })

defineProps<{
  list: any[] ,
  paginationOptions: TPaginationRequest,
  pagination: TPagination
}>()

</script>
