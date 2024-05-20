<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton :class="[className.classes]"
          class="inline-flex justify-center rounded-md m-1 p-2 text-sm font-medium  hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          <span >{{$t(className.label)}}</span>
          <ChevronDownIcon
            class="-mr-1 ml-2 h-5 w-5"
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
          class="absolute z-10 right-0 origin-top-right divide-y divide-gray-100 bg-gray-50 rounded-md ring-1 ring-black/5 focus:outline-none"
        >
          <div class="py-2">
            <MenuItem v-slot="{ active }"
            v-for="stat in status" :key="stat.value">
              <button @click="()=>toggle(stat.value)"
              :disabled="stat === className"
                :class="[ 'group flex w-full items-center px-2 py-2 text-sm min-w-46',stat.classes ]"
              >
                <component :is="stat.icon"
                  :active="active"
                  class="mr-2 h-5 w-5 !bg-transparent"
                 
                  aria-hidden="true"
                />
                {{ $t(stat.label) }}
              </button>
            </MenuItem>
           
          </div>

        </MenuItems>
      </transition>
    </Menu>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { CheckCircleIcon, CheckIcon, ClockIcon, NoSymbolIcon, TrashIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

import { successNotification } from '@/core/services/helpers/alert.helper'
import { put } from '@/core/services/helpers/request.helper'
import { i18n } from '@/core/services/base/translation'
import { StatusEnum } from '@/core/models/enum'

import type { Item } from 'vue3-easy-data-table'

const props = defineProps<{
  item: Item
  fetch: () => Promise<void>
  route: string
}>()

const state = ref(props.item)
// eslint-disable-next-line vue/return-in-computed-property
const className = computed(()=>{
  const result = status.find(item => item.value == props.item.status) || status[0]
  return result
})

watch(()=>props.item,(newValue)=>{
  state.value = newValue
},{deep:true})


const status = [
  {
    label : 'table.active',
    value : StatusEnum.Active,
    classes: 'text-green-600 bg-green-100 disabled:bg-green-50 disabled:text-green-300',
    icon: CheckIcon
  },
  {
    label : 'table.inactive',
    value : StatusEnum.Inactive,
    classes: 'text-gray-600 bg-gray-100 disabled:bg-gray-50 disabled:text-gray-300',
    icon: NoSymbolIcon
  },
  {
    label : 'table.pending',
    value : StatusEnum.Pending,
    classes: 'text-yellow-600 bg-yellow-100 disabled:bg-yellow-50 disabled:text-yellow-300',
    icon: ClockIcon
  },
  {
    label : 'table.completed',
    value : StatusEnum.Completed,
    classes: 'text-blue-600 bg-blue-100 disabled:bg-blue-50 disabled:text-blue-300',
    icon: CheckCircleIcon
  },
  {
    label : 'table.canceled',
    value : StatusEnum.Canceled,
    classes: 'text-red-600 bg-red-100 disabled:bg-red-50 disabled:text-red-300',
    icon: XMarkIcon
  },
  {
    label : 'table.remove',
    value : StatusEnum.Remove,
    classes: 'text-black-600 bg-black-100 disabled:bg-black-50 disabled:text-black-300',
    icon: TrashIcon
  }
]

const toggle = async (value: StatusEnum) => {
  state.value = {...state.value,status:value}
  put(`/api/${props.route}/${state.value.id}`, state.value).then(response => {
    if (response?.data) {
      successNotification(i18n.global.t('message.update_success'))
    }
  })

}
</script>
