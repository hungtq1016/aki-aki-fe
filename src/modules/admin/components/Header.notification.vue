<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { BellIcon } from '@heroicons/vue/24/outline';
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const target = ref(null)
const dropdownOpen = ref(false)
const notifying = ref(true)

onClickOutside(target, () => {
    dropdownOpen.value = false
})

const notificationItems = ref([
    {
        route: '#',
        title: 'Edit your information in a swipe',
        details: 'Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
        time: '12 May, 2025'
    },
    {
        route: '#',
        title: 'It is a long established fact',
        details: 'that a reader will be distracted by the readable.',
        time: '24 Feb, 2025'
    },
    {
        route: '#',
        title: 'There are many variations',
        details: 'of passages of Lorem Ipsum available, but the majority have suffered',
        time: '04 Jan, 2025'
    },
    {
        route: '#',
        title: 'There are many variations',
        details: 'of passages of Lorem Ipsum available, but the majority have suffered',
        time: '01 Dec, 2024'
    }
])
</script>

<template>
    <li class="relative" ref="target">
        <router-link
            class="relative flex h-['34px'] w-['34px'] items-center justify-center rounded-full border-[0.5px] border-zumthor-100 bg-zircon-50 hover:text-cerulean-600 dark:border-oxford-blue-900 dark:bg-oxford-blue-900 dark:text-white"
            to="#" @click.prevent="(dropdownOpen = !dropdownOpen), (notifying = false)">
            <span :class="!notifying && 'hidden'" class="absolute -top-px right-0 z-[1] h-2 w-2 rounded-full bg-red-ribbon-600">
                <span
                    class="absolute -z-[1] inline-flex h-full w-full animate-ping rounded-full bg-red-ribbon-600 opacity-75"></span>
            </span>
            <BellIcon class="w-5 h-5 duration-300 ease-in-out" />
        </router-link>

        <!-- Dropdown Start -->
        <div v-show="dropdownOpen"
            class="absolute -right-[108px] mt-2.5 flex h-[360px] w-[300px] flex-col rounded-sm border border-zumthor-100 bg-white shadow-default dark:border-oxford-blue-900 dark:bg-zinc-950  sm:right-0 sm:w-80">
            <div class="px-[18px] py-3">
                <h5 class="text-sm font-medium text-regent-gray-600 ">{{$t('route.notifcation')}}</h5>
            </div>

            <ul class="flex h-auto flex-col overflow-y-auto">
                <template v-for="(item, index) in notificationItems" :key="index">
                    <li>
                        <router-link
                            class="flex flex-col gap-2.5 border-t border-zumthor-100 px-[18px] py-3 hover:bg-black-haze-50 dark:border-oxford-blue-900 dark:hover:bg-oxford-blue-900"
                            :to="item.route">
                            <p class="text-sm">
                                <span class="text-slate-950 dark:text-white">{{ item.title }}</span>
                                {{ item.details }}
                            </p>

                            <p class="text-xs">{{ item.time }}</p>
                        </router-link>
                    </li>
                </template>
            </ul>
            <div class="px-[18px] py-3">
                <router-link to="/admin/notification" class="text-sm font-medium text-regent-gray-600 ">{{ $t('content.go_to_notification') }}</router-link>
            </div>
        </div>
        <!-- Dropdown End -->
    </li>
</template>
