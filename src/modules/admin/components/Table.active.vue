<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- <div v-swi></div>
  <button
    v-if="item.enable"
    @click="toggle"
    class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 whitespace-nowrap"
  >
    {{ $t('content.active') }}
  </button>
  <button
    v-else
    @click="toggle"
    class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 whitespace-nowrap"
  >
    {{ $t('content.inactive') }}
  </button> -->
  <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Options
          <ChevronDownIcon
            class="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                <EditIcon
                  :active="active"
                  class="mr-2 h-5 w-5 text-violet-400"
                  aria-hidden="true"
                />
                Edit
              </button>
            </MenuItem>
           
          </div>

        </MenuItems>
      </transition>
    </Menu>
</template>

<script setup lang="ts">
import { successNotification } from '@/core/services/helpers/alert.helper'
import { put } from '@/core/services/helpers/request.helper'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { i18n } from '@/core/services/base/translation'

import { getPath } from '@/core/services/utils/util.url'

import type { Item } from 'vue3-easy-data-table'

const props = defineProps<{
  item: Item
  fetch: () => Promise<void>
  route: string
}>()

const status = [
  {
    label : 'table.active',
    value : 'active',
    classes: '',
    
  }
]

const toggle = async () => {
  // eslint-disable-next-line vue/no-mutating-props
  props.item.enable = !props.item.enable

  const response = await put(`${getPath('api.' + props.route)}/${props.item.id}`, props.item)
  if (response?.isError == false) {
    await props.fetch()
    successNotification(i18n.global.t('message.update_success'))
  }
}
</script>
