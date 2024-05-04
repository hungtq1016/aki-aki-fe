<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const target = ref(null)
const dropdownOpen = ref(false)
const notifying = ref(true)

onClickOutside(target, () => {
    dropdownOpen.value = false
})

import userOne from '@/assets/images/user/user-01.png'
import userTwo from '@/assets/images/user/user-02.png'
import userThree from '@/assets/images/user/user-03.png'
import userFour from '@/assets/images/user/user-04.png'
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/vue/24/outline';

const messagesList = ref([
    {
        route: '#',
        userImg: userTwo,
        name: 'Mariya Desoja',
        message: 'I like your confidence 💪',
        time: '2min ago'
    },
    {
        route: '#',
        userImg: userOne,
        name: 'Robert Jhon',
        message: 'Can you share your offer?',
        time: '10min ago'
    },
    {
        route: '#',
        userImg: userThree,
        name: 'Henry Dholi',
        message: 'I cam across your profile and...',
        time: '1day ago'
    },
    {
        route: '#',
        userImg: userFour,
        name: 'Cody Fisher',
        message: 'I’m waiting for you response!',
        time: '5day ago'
    },
    {
        route: '#',
        userImg: userTwo,
        name: 'Mariya Desoja',
        message: 'I like your confidence 💪',
        time: '2min ago'
    }
])
</script>

<template>
    <li class="relative" ref="target">
        <router-link
            class="relative flex h-['34px'] w-['34px'] items-center justify-center rounded-full border-[0.5px] border-zumthor-100 bg-zircon-50 hover:text-cerulean-blue-600 dark:border-oxford-blue-900 dark:bg-oxford-blue-900 dark:text-white"
            to="#" @click.prevent="(dropdownOpen = !dropdownOpen), (notifying = false)">
            <span :class="!notifying && 'hidden'"
                class="absolute -top-px -right-px z-[1] h-2 w-2 rounded-full bg-red-ribbon-600">
                <span
                    class="absolute -z-[1] inline-flex h-full w-full animate-ping rounded-full bg-red-ribbon-600 opacity-75"></span>
            </span>
            <ChatBubbleOvalLeftEllipsisIcon class="w-5 h-5 duration-300 ease-in-out" />
        </router-link>

        <!-- Dropdown Start -->
        <div v-show="dropdownOpen"
            class="absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-zumthor-100 bg-white shadow-default dark:border-oxford-blue-900 dark:bg-big-stone-950  sm:right-0 sm:w-80">
            <div class="px-[18px] py-3">
                <h5 class="text-sm font-medium text-regent-gray-600 ">Messages</h5>
            </div>

            <ul class="flex h-auto flex-col overflow-y-auto">
                <template v-for="item in messagesList" :key="item.name">
                    <li>
                        <router-link
                            class="flex gap-[18px] border-t border-zumthor-100 px-[18px] py-3 hover:bg-black-haze-50 dark:border-oxford-blue-900 dark:hover:bg-oxford-blue-900"
                            :to="item.route">
                            <div class="h-[50px] w-[50px] rounded-full">
                                <img :src="item.userImg" alt="User" />
                            </div>

                            <div>
                                <h6 class="text-sm font-medium text-ebony-clay-950 dark:text-white">{{ item.name }}</h6>
                                <p class="text-sm">{{ item.message }}</p>
                                <p class="text-xs">{{ item.time }}</p>
                            </div>
                        </router-link>
                    </li>
                </template>
            </ul>
        </div>
        <!-- Dropdown End -->
    </li>
</template>
