<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <li>
        <router-link to="?" v-if="item.children"
            class="link w-full group flex justify-between items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-link-water-200  duration-300 ease-in-out hover:bg-bright-gray-900 dark:hover:bg-oxford-blue-900"
            @click="() => openDropdown = !openDropdown">
            <div class="flex gap-x-2 items-center">
                <component :is="item.icon" class="w-5 h-5"></component>
                <span>{{ $t(item.label) }}</span>
            </div>
            <ChevronDownIcon v-if="item.children" class="w-5 h-5" :class="{ 'rotate-180': openDropdown }" />
        </router-link>
        <router-link :to="item.slug" v-else
            class="group flex justify-between items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-link-water-200  duration-300 ease-in-out hover:bg-bright-gray-900 dark:hover:bg-oxford-blue-900">
            <div class="flex gap-x-2 items-center">
                <component :is="item.icon" class="w-5 h-5"></component>
                <span>{{ $t(item.label) }}</span>
            </div>
        </router-link>
        <!-- Dropdown Menu Start -->
        <div class="dropdown translate transform overflow-hidden" v-show="openDropdown">
            <AsideDropdown v-if="item.children" :items="item.children" :page="item.label" />
        </div>
        <!-- Dropdown Menu End -->
    </li>
</template>
<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import type { TMenuItem } from '../models/type';
import AsideDropdown from './Aside.dropdown.vue';
import { ref, type Ref } from 'vue';
defineProps<{
    item: TMenuItem,
    index: number
}>()

const openDropdown: Ref<boolean> = ref(false)
</script>
