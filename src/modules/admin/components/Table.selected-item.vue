<template>
    <Menu as="div" class="relative inline-block text-left mt-2">
        <MenuButton :disabled="total === 0"
            class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-alabaster-500 hover:enabled:bg-gray-50 disabled:bg-gray-100 disabled:ring-0 disabled:text-gray-600">
            {{ total ? $t('table.select_rows', { count: total }) : $t('table.select_action') }}
            <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
        <transition enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <MenuItems
                class="absolute right-0 z-[10] mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-ebony-clay-950 ring-opacity-5 focus:outline-none">
                <div class="py-1">
                    <MenuItem v-slot="{ active }" v-for="action in actions" :key="action.text">
                    <button @click="action.action"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm w-full']">
                        <component :is="action.icon" class="mr-3 h-5 w-5  group-hover:text-gray-500"
                            :class=[action.class] aria-hidden="true" />
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
import { EyeIcon, EyeSlashIcon, TrashIcon, ChevronDownIcon } from '@heroicons/vue/24/solid';

import { del, put } from '@/core/services/helpers/request.helper';

import { getPath } from '@/core/services/utils/util.url';

import type { Item } from 'vue3-easy-data-table';

const props = defineProps<{
    total: number,
    items: Item[],
    route: string,
    fetch: () => Promise<void>
}>()
const route = getPath('api.' + props.route)
const actions = [
    {
        text: 'table.disable_all',
        action: async () => {
            props.items.map(item => item.enable = false)
            await put<any, boolean>(route, props.items)
            await props.fetch()
        },
        icon: EyeSlashIcon,
        class: 'text-amber-600'
    },
    {
        text: 'table.delete_all',
        action: async () => {
            await del<any, boolean>(route, props.items)
            await props.fetch()
        },
        icon: TrashIcon,
        class: 'text-red-600'
    },
    {
        text: 'table.enable_all',
        action: async () => {
            props.items.map(item => item.enable = true)
            await put<any, boolean>(route, props.items)
            await props.fetch()
        },
        icon: EyeIcon,
        class: 'text-green-600'
    }
]


</script>