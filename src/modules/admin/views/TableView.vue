<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="bg-white dark:bg-transparent p-2 border border-gray-200 dark:border-black-700 dark:bg-zinc-950"
  >
    <div class="pb-2 flex gap-x-2">
      <TableHeader
        :value="selectedHeaders"
        :options="headers"
        @update:modelValue="(value) => (selectedHeaders = value)"
      />
      <TableSelectedItem
        :total="countItems"
        :items="itemsSelected"
        :route="route"
        :fetch="fetch"
    
      />
      <input
        v-model="search"
        type="text"
        :placeholder="$t('form.place_holder.search')"
        class="dark:!border-zinc-950 dark:!bg-zinc-900 dark:text-gray-50 text-gray-900 rounded-lg border border-gray-100 !bg-gray-50 bg-transparent px-4 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50"
      />  
      <button 
      @click="()=>{paginationOptions.search = search}"
      type="button" 
      class="flex items-center justify-center px-3.5 rounded bg-cerulean-600">
        <FunnelIcon class="w-5 h-5 text-cerulean-50"/>
      </button>
    </div>

    <EasyDataTable
      v-model:items-selected="itemsSelected"
      :headers="localeHeaders"
      :items="itemRef"
      :hide-footer="true"
      :header-item-class-name="headerItemClassNameFunction"
      :body-item-class-name="bodyItemClassNameFunction"
      class="dark:!border-zinc-900"
      no-hover
    >
      <template #item-id="{ id }">
        <p class="truncate max-w-28">{{ id }}</p>
      </template>
      <template #item-title="{ title }">
        <p class="line-clamp-1 w-40 hover:line-clamp-2">{{ title }}</p>
      </template>
      <template #item-slug="{ slug }">
        <p class="line-clamp-1 w-40 hover:line-clamp-1">{{ slug }}</p>
      </template>
      <template #item-desc="{ desc }">
        <p class="line-clamp-1 w-40 hover:line-clamp-2">{{ desc }}</p>
      </template>
      <template #item-content="{ content }">
        <p class="line-clamp-1 w-40 hover:line-clamp-2">{{ content }}</p>
      </template>
      <template #item-label="{ label }">
        <p class="line-clamp-1 w-40 hover:line-clamp-2">{{ label }}</p>
      </template>
      <template #item-name="{ name }">
        <p class="line-clamp-1 w-40 hover:line-clamp-2">{{ name }}</p>
      </template>
      <template #item-addressEmbed="{ addressEmbed }">
        <div class="w-40 h-40 overflow-hidden" v-html="addressEmbed"></div>
      </template>
      <template #item-videoEmbed="{ videoEmbed }">
        <div class="w-40 h-40 overflow-hidden" v-html="videoEmbed"></div>
      </template>
      <template #item-imageUrl="{ imageUrl }">
        <img :src="imageBuilderUrl(imageUrl)" :alt="imageUrl" class="w-10 h-10 object-cover" />
      </template>
      <template #item-status="item">
        <TableActive :item="item" :fetch="fetch" :route="route"/>
      </template>
      <template #item-size="{ size }">
        <p class="whitespace-nowrap">{{ numberToByte(Number(size)) }}</p>
      </template>
      <template #item-date="{ date }">
        <div>{{ format(new Date(date), 'dd/MM/yyyy') }}</div>
      </template>
      <template #item-time="{ time }">
        <div> {{ formattedTime(JSON.parse(time)) }} </div>
      </template>
      <template #item-createdAt="{ createdAt }">
        <TableDatetime :date="createdAt" />
      </template>
      <template #item-updatedAt="{ updatedAt }">
        <TableDatetime :date="updatedAt" />
      </template>
      <template #item-action="item">
        <TableAction v-bind="{ item, route, fetch }" />
      </template>
      <template #item-delete="{ id }">
        <button @click="remove(id)"><TrashIcon class="w-5 h-5" /></button>
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
import { computed, ref, watch } from 'vue'

// Local modules
import TableHeader from '../components/Table.header.vue'
import TableFooter from '../components/Table.footer.vue'
import TableActive from '../components/Table.active.vue'
import TableDatetime from '../components/Table.datatime.vue'
import TableAction from '../components/Table.action.vue'
import TableSelectedItem from '../components/Table.selected-item.vue'

import { i18n } from '@/core/services/base/translation'
import { numberToByte } from '@/core/services/utils/util.number'

import type { ComponentPublicInstance } from 'vue'
import type {
  Header,
  Item,
  HeaderItemClassNameFunction,
  BodyItemClassNameFunction
} from 'vue3-easy-data-table'
import type { TPagination, TPaginationRequest } from '@/core/models/type'
import { TrashIcon, FunnelIcon } from '@heroicons/vue/24/outline'
import { imageBuilderUrl } from '@/core/services/utils/util.string'
import { format } from 'date-fns'

const props = defineProps<{
  headers: Header[]
  items: Item[]
  pagination: TPagination
  paginationOptions: TPaginationRequest
  route: string
  fetch: () => Promise<void>
  expandComponent?: ComponentPublicInstance
}>()

const itemRef = ref(props.items)

const headerItemClassNameFunction: HeaderItemClassNameFunction = (header: Header): string => {
  if (header.value === 'score') return 'score-column'
  return 'dark:!bg-zinc-900 dark:!text-gray-50 dark:!border-gray-800'
}

const bodyItemClassNameFunction: BodyItemClassNameFunction = (column: string): string => {
  if (column === 'score') return 'score-column'
  return 'dark:!bg-zinc-800 dark:!text-gray-50 dark:!border-gray-800'
}

const itemsSelected = ref<Item[]>([])
const localeHeaders = computed(() => {
  return selectedHeaders.value.map((header) => {
    return {
      ...header,
      text: i18n.global.t(header.text) as string
    }
  })
})

const remove = (id: string): void => {
  itemRef.value = itemRef.value.filter((value) => value.id !== id)
}

const formattedTime = (time: any, defaultTime = { hours: 0, minutes: 0, seconds: 0 }) => format(
    new Date().setHours(
        (time && time.hours) || defaultTime.hours,
        (time && time.minutes) || defaultTime.minutes,
        (time && time.seconds) || defaultTime.seconds
    ),
    'HH:mm:ss'
);


const selectedHeaders = ref<Header[]>([...props.headers])
const countItems = computed(() => itemsSelected.value.length)
const search = ref('')

watch(
  () => props.items,
  (newValue) => {
    itemRef.value = newValue
  }
)
</script>
