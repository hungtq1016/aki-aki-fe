<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ArrowLeftStartOnRectangleIcon, GlobeAltIcon, UserIcon } from '@heroicons/vue/24/outline';
import { ChevronDownIcon } from '@heroicons/vue/24/solid';
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import type { TMenu } from '../models/type';

const target = ref(null)
const dropdownOpen = ref(false)

onClickOutside(target, () => {
    dropdownOpen.value = false
})

const menuProfile: TMenu = {
    name: "navigation.profile",
    menuItems: [
        {
            icon: UserIcon,
            label: "navigation.profile",
            route: "/profile"
        },
        {
            icon: GlobeAltIcon,
            label: "navigation.contacts",
            route: "#"
        }
    ]
}
</script>

<template>
    <li>
        <div class="relative" ref="target">
            <router-link class="flex items-center gap-4" to="#" @click.prevent="dropdownOpen = !dropdownOpen">
                <span class="hidden text-right lg:block">
                    <span class="block text-sm font-medium text-black dark:text-white">{{
                        $t('message.greeting',{name:"Hung"}) }}</span>
                </span>

                <span class="h-12 w-12 rounded-full">
                    <img src="@/assets/images/user/user-01.png" alt="User" />
                </span>

                <ChevronDownIcon class="w-4 h-5" :class="dropdownOpen && 'rotate-180'" />

            </router-link>

            <!-- Dropdown Start -->
            <div v-show="dropdownOpen"
                class="absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <ul class="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
                    <li v-for="item in menuProfile.menuItems" :key="item.label">
                        <router-link :to="item.route"
                            class="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
                            <component :is="item.icon" class="w-5 h-5" />
                            <span>{{ $t(item.label) }}</span>
                        </router-link>
                    </li>
                </ul>
                <button
                    class="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
                    <ArrowLeftStartOnRectangleIcon class="w-6 h-6 " />
                    <span>{{ $t('oauth2.signout') }}</span>
                </button>
            </div>
            <!-- Dropdown End -->
        </div>
    </li>
</template>
