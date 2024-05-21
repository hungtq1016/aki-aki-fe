<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton
      :disabled="total === 0"
      class="inline-flex w-full justify-center gap-x-1.5 py-2.5 dark:!border-zinc-950 dark:!bg-zinc-900 dark:text-gray-50 text-gray-900 rounded-lg border border-gray-100 !bg-gray-50 bg-transparent px-4 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50"
    >
      {{ total ? $t('table.select_rows', { count: total }) : $t('table.select_action') }}
      <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
    </MenuButton>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-[10] mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-slate-950 ring-opacity-5 focus:outline-none"
      >
        <div class="py-1">
          <MenuItem v-slot="{ active }" v-for="action in actions" :key="action.text">
            <button
              @click="action.action"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'group flex items-center px-4 py-2 text-sm w-full'
              ]"
            >
              <component
                :is="action.icon"
                class="mr-3 h-5 w-5 group-hover:text-gray-500"
                :class="[action.class]"
                aria-hidden="true"
              />
              <span class="whitespace-nowrap">{{ $t(action.text) }}</span>
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { EyeIcon, EyeSlashIcon, TrashIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'

import { del, put } from '@/core/services/helpers/request.helper'

import type { Item } from 'vue3-easy-data-table'
import { StatusEnum } from '@/core/models/enum';

const props = defineProps<{
  total: number
  items: Item[]
  route: string
  fetch: () => Promise<void>
}>()

const actions = [
  {
    text: 'table.inactive_all',
    action: async () => {
      props.items.map((item) => (item.status = StatusEnum.Inactive))
      await put<any, boolean>(`/api/${props.route}`, props.items)
      await props.fetch()
    },
    icon: EyeSlashIcon,
    class: 'text-amber-600'
  },
  {
    text: 'table.delete_all',
    action: async () => {
      await del<any, boolean>(`/api/${props.route}`, props.items)
      await props.fetch()
    },
    icon: TrashIcon,
    class: 'text-red-600'
  },
  {
    text: 'table.active_all',
    action: async () => {
      props.items.map((item) => (item.status = StatusEnum.Active))
      await put<any, boolean>(`/api/${props.route}`, props.items)
      await props.fetch()
    },
    icon: EyeIcon,
    class: 'text-green-600'
  }
]
</script>
