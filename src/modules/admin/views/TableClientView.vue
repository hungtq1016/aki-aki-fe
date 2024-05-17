<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-white dark:bg-transparent dark:bg-zinc-950">
    <EasyDataTable :headers="localeHeaders" :items="itemRef" :hide-footer="true"
      :header-item-class-name="headerItemClassNameFunction" :body-item-class-name="bodyItemClassNameFunction"
      class="dark:!border-zinc-900" no-hover>
      <template #item-createdAt="{ createdAt }">
        <TableDatetime :date="createdAt" />
      </template>
      <template #item-view="{ id }">
        <button @click="()=>{router.push(`/${route}/${id}`)}">
          <EyeIcon class="w-5 h-5" />
        </button>
      </template>
    </EasyDataTable>
    <TableFooter v-bind="{ pagination, paginationOptions }" />
  </div>
</template>
<script setup lang="ts">
// Third-party libraries
import { computed, ref, watch } from 'vue'

// Local modules
import TableDatetime from '../components/Table.datatime.vue'
import { EyeIcon } from '@heroicons/vue/24/outline'

import { i18n } from '@/core/services/base/translation'

import type { ComponentPublicInstance } from 'vue'
import type { Header, Item, HeaderItemClassNameFunction, BodyItemClassNameFunction } from 'vue3-easy-data-table'
import type { TPagination, TPaginationRequest } from '@/core/models/type'
import { useRouter } from 'vue-router'
import TableFooter from '../components/Table.footer.vue'

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
const router = useRouter()

const headerItemClassNameFunction: HeaderItemClassNameFunction = (header: Header): string => {
  if (header.value === 'score') return 'score-column'
  return 'dark:!bg-zinc-900 dark:!text-gray-50 dark:!border-gray-800'
}

const bodyItemClassNameFunction: BodyItemClassNameFunction = (column: string): string => {
  if (column === 'score') return 'score-column'
  return 'dark:!bg-zinc-800 dark:!text-gray-50 dark:!border-gray-800'
}

const localeHeaders = computed(() => {
  return selectedHeaders.value.map((header) => {
    return {
      ...header,
      text: i18n.global.t(header.text) as string
    }
  })
})

const selectedHeaders = ref<Header[]>([...props.headers])

watch(
  () => props.items,
  (newValue) => {
    itemRef.value = newValue
  }
)
</script>