<template>
    <div class="h-[calc(100vh-186px)] overflow-hidden sm:h-[calc(100vh-174px)]">
        <div
            class="h-full rounded-sm border border-zumthor-100 bg-white shadow-default dark:border-oxford-blue-900 dark:bg-gray-950 xl:flex">
            <div class="hidden h-full flex-col xl:flex xl:w-1/4">
                <div class="sticky border-b border-zumthor-100 px-6 py-7.5 dark:border-oxford-blue-900">
                    <h3 class="text-lg font-medium text-black-1000 dark:text-white 2xl:text-xl">
                        {{ $t('content.conversation') }}
                        <span
                            class="rounded-md border-[.5px] border-zumthor-100 bg-black-haze-50 py-0.5 px-2 text-base font-medium text-black-1000 dark:border-oxford-blue-900 dark:bg-shark-950 dark:text-white 2xl:ml-4">
                            {{ userMessage.length }}
                        </span>
                    </h3>
                </div>
                <div class="flex max-h-full flex-col overflow-auto p-5">
                    <form class="sticky mb-7">
                        <input type="text"
                            class="w-full rounded border border-zumthor-100 bg-black-haze-50 py-2.5 pl-5 pr-10 text-sm outline-none focus:border-cerulean-600 dark:border-oxford-blue-900 dark:bg-shark-950"
                            :placeholder="$t('form.place_holder.search')">
                        <button class="absolute top-1/2 right-4 -translate-y-1/2">
                            <MagnifyingGlassIcon class="w-5 h-5" />
                        </button>
                    </form>
                    <div class="max-h-full space-y-2.5 overflow-auto">
                        <MessageItem v-for="data in userMessage" :key="data.fullName" :data="data" />
                    </div>
                </div>
            </div>
            <div class="flex h-full flex-col border-l border-zumthor-100 dark:border-oxford-blue-900 xl:w-3/4">
                <div
                    class="sticky flex items-center justify-between border-b border-zumthor-100 px-6 py-4.5 dark:border-oxford-blue-900">
                    <div class="flex items-center">
                        <div class="mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full"><img
                                src="/user/user-01.png" alt="avatar" class="h-full w-full object-cover object-center">
                        </div>
                        <div>
                            <h5 class="font-medium text-black-1000 dark:text-white">Henry Dholi</h5>
                            <p v-if="true" class="text-sm font-medium flex gap-x-2 items-center">
                                <span class="block h-3 w-3 rounded-full border-2 border-gray-2 bg-green-600" />
                                <span>{{ $t('content.online') }}</span>
                            </p>
                            <p v-else class="text-sm font-medium flex gap-x-2 items-center">
                                <span class="block h-3 w-3 rounded-full border-2 border-gray-2 bg-red-600" />
                                <span>{{ $t('content.offline') }}</span>
                            </p>
                        </div>
                    </div>
                    <Menu as="div" class="relative inline-block text-left">
                        <div>
                            <MenuButton
                                class="inline-flex w-full justify-center">
            
                                <EllipsisHorizontalIcon class="-mr-1 ml-2 h-8 w-8 text-gray-400 hover:text-gray-500"
                                    aria-hidden="true" />
                            </MenuButton>
                        </div>

                        <transition enter-active-class="transition duration-100 ease-out"
                            enter-from-class="transform scale-95 opacity-0"
                            enter-to-class="transform scale-100 opacity-100"
                            leave-active-class="transition duration-75 ease-in"
                            leave-from-class="transform scale-100 opacity-100"
                            leave-to-class="transform scale-95 opacity-0">
                            <MenuItems
                                class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black-1000/5 focus:outline-none">
                                <div class="px-1 py-1">
                                    <MenuItem v-slot="{ active }">
                                    <button :class="[
                                        active ? 'bg-cerulean-500 text-white' : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]">
                                        <EditIcon :active="active" class="mr-2 h-5 w-5 text-cerulean-400"
                                            aria-hidden="true" />
                                        Edit
                                    </button>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                    <button :class="[
                                        active ? 'bg-cerulean-500 text-white' : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]">
                                        <DuplicateIcon :active="active" class="mr-2 h-5 w-5 text-cerulean-400"
                                            aria-hidden="true" />
                                        Duplicate
                                    </button>
                                    </MenuItem>
                                </div>
                                <div class="px-1 py-1">
                                    <MenuItem v-slot="{ active }">
                                    <button :class="[
                                        active ? 'bg-cerulean-500 text-white' : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]">
                                        <ArchiveIcon :active="active" class="mr-2 h-5 w-5 text-cerulean-400"
                                            aria-hidden="true" />
                                        Archive
                                    </button>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                    <button :class="[
                                        active ? 'bg-cerulean-500 text-white' : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]">
                                        <MoveIcon :active="active" class="mr-2 h-5 w-5 text-cerulean-400"
                                            aria-hidden="true" />
                                        Move
                                    </button>
                                    </MenuItem>
                                </div>

                                <div class="px-1 py-1">
                                    <MenuItem v-slot="{ active }">
                                    <button :class="[
                                        active ? 'bg-cerulean-500 text-white' : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]">
                                        <DeleteIcon :active="active" class="mr-2 h-5 w-5 text-cerulean-400"
                                            aria-hidden="true" />
                                        Delete
                                    </button>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
                <div class="max-h-full space-y-3.5 overflow-auto px-6 py-7.5">
                    <template v-for="data in messages" :key="data.content">
                        <MessageItemLeft v-if="data.author !== user" :data="data" />
                        <MessageItemRight v-else :data="data" />
                    </template>
                </div>
                <div
                    class="sticky bottom-0 border-t border-zumthor-100 bg-white py-5 px-6 dark:border-oxford-blue-900 dark:bg-gray-950">
                    <form @submit.prevent="() => { console.log('hello') }"
                        class="flex items-center justify-between space-x-4.5">
                        <div class="relative w-full">
                            <input type="text" :placeholder="$t('form.place_holder.chat')"
                                class="h-13 w-full rounded-md border border-zumthor-100 bg-zircon-50 pl-5 pr-19 font-medium text-black-1000 placeholder-body outline-none focus:border-cerulean-600 dark:border-oxford-blue-900 dark:bg-shark-950 dark:text-white">
                            <div
                                class="absolute right-5 top-1/2 inline-flex -translate-y-1/2 items-center justify-end space-x-4">
                                <button type="button" class="hover:text-cerulean-600">
                                    <PaperClipIcon class="w-4.5 h-4.5" />
                                </button>
                                <button type="button" class="hover:text-cerulean-600">
                                    <FaceSmileIcon class="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        <button type="submit"
                            class="flex h-13 w-full max-w-13 items-center justify-center rounded-md bg-cerulean-600 text-white hover:bg-opacity-90">
                            <PaperAirplaneIcon class="w-6 h-6" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { EllipsisHorizontalIcon, MagnifyingGlassIcon, PaperClipIcon } from '@heroicons/vue/24/solid';
import { FaceSmileIcon, PaperAirplaneIcon } from '@heroicons/vue/24/outline';

import MessageItem from '../components/Message.user.vue'
import MessageItemLeft from '../components/Message.item.left.vue';
import MessageItemRight from '../components/Message.item.right.vue';

import { userMessage, messages } from '../services/data/data'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const user = "Henry Dholi"
</script>