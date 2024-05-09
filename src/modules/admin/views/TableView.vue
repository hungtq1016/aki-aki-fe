<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-white dark:bg-transparent p-2 border border-gray-200 dark:border-black-700 dark:bg-zinc-950">
    <div class="pb-2 flex gap-x-2">
      <TableHeader :value="selectedHeaders" :options="headers" @update:modelValue="value => selectedHeaders = value" />
      <TableSelectedItem :total="countItems" :items="itemsSelected" :route="route" :fetch="fetch" v-bind="{}" />
    </div>

    <EasyDataTable v-model:items-selected="itemsSelected" :headers="localeHeaders" :items="items" :hide-footer="true"
      :header-item-class-name="headerItemClassNameFunction" 
      :body-item-class-name="bodyItemClassNameFunction"
      class="dark:!border-zinc-900"
      no-hover>
      <template #item-id="{ id }">
        <p class="truncate max-w-28">{{ id }}</p>
      </template>
      <template #item-title="{ title }">
        <p class="line-clamp-1 w-40 hover:line-clamp-2">{{ title }}</p>
      </template>
      <template #item-desc="{ desc }">
        <p class="line-clamp-1 w-40 hover:line-clamp-2">{{ desc }}</p>
      </template>
      <template #item-name="{ name }">
        <p class="line-clamp-1 w-40 hover:line-clamp-2">{{ name }}</p>
      </template>
      <template #item-enable="item">
        <TableActive :item="item" :fetch="fetch" :route="route" />
      </template>
      <template #item-size="{ size }">
        <p class="whitespace-nowrap">{{ numberToByte(Number(size)) }} </p>
      </template>
      <template #item-createdAt="{ createdAt }">
        <TableDatetime :date="createdAt" />
      </template>
      <template #item-updatedAt="{ updatedAt }">
        <TableDatetime :date="updatedAt" />
      </template>
      <template #item-action="{ id }">
        <TableAction v-bind="{ id, route, fetch }" />
      </template>
      <template #expand="item" v-if="expandComponent">
        <expandComponent v-bind="{ item, route }" />
      </template>
    </EasyDataTable>

    <TableFooter v-bind="{ pagination, paginationOptions }" />
  </div>
</template>
<script setup lang="ts">
// Third-party libraries
import { computed, ref } from "vue";

// Local modules
import TableHeader from "../components/Table.header.vue";
import TableFooter from "../components/Table.footer.vue";
import TableActive from "../components/Table.active.vue";
import TableDatetime from "../components/Table.datatime.vue";
import TableAction from "../components/Table.action.vue";
import TableSelectedItem from "../components/Table.selected-item.vue";

import { i18n } from "@/core/services/base/translation";
import { numberToByte } from '@/core/services/utils/util.number'

import type { ComponentPublicInstance } from 'vue'
import type { Header, Item, HeaderItemClassNameFunction, BodyRowClassNameFunction, BodyItemClassNameFunction } from "vue3-easy-data-table";
import type { TPagination, TPaginationRequest } from "@/core/models/type";

const props = defineProps<{
  headers: Header[];
  items: Item[];
  pagination: TPagination;
  paginationOptions: TPaginationRequest,
  route: string;
  fetch: () => Promise<void>;
  expandComponent?: ComponentPublicInstance
}>();

const headerItemClassNameFunction: HeaderItemClassNameFunction = (header: Header, columnNumber: number): string => {
  if (header.value === 'score') return 'score-column';
  return 'dark:!bg-zinc-900 dark:!text-gray-50 dark:!border-gray-800';
};

const bodyItemClassNameFunction: BodyItemClassNameFunction = (column: string, rowNumber: number): string => {
  if (column === 'score') return 'score-column';
  return 'dark:!bg-zinc-800 dark:!text-gray-50 dark:!border-gray-800';
};

const itemsSelected = ref<Item[]>([]);
const localeHeaders = computed(() => {
  return selectedHeaders.value.map((header) => {
    return {
      ...header,
      text: i18n.global.t(header.text) as string,
    };
  });
});

const selectedHeaders = ref<Header[]>([...props.headers]);
const countItems = computed(() => itemsSelected.value.length);

</script>