<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { useSidebarStore } from '../stores/sidebar';
import type { TAsideItem, TMenuItem } from '../models/type';

const sidebarStore = useSidebarStore()

const props = defineProps<{
    item: TMenuItem,
    index: number
}>()

const currentPage = useRoute().name

const handleItemClick = () => {
    const pageName = sidebarStore.page === props.item.label ? '' : props.item.label
    sidebarStore.page = pageName

    if (props.item.children) {
        return props.item.children.some((child: TAsideItem) => sidebarStore.selected === child.label)
    }
}

</script>

<template>
    <li>
        <router-link :to="item.route"
            class="group flex justify-between items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
            @click.prevent="handleItemClick" :class="{
                'bg-graydark dark:bg-meta-4': sidebarStore.page === item.label
            }">
            <div class="flex gap-x-2 items-center">
                <component :is="item.icon" class="w-5 h-5"></component>
                <span>{{ $t(item.label) }}</span>
            </div>
            <ChevronDownIcon v-if="item.children" class="w-5 h-5"
                :class="{ 'rotate-180': sidebarStore.page === item.label }" />
        </router-link>

        <!-- Dropdown Menu Start -->
        <div class="translate transform overflow-hidden" v-show="sidebarStore.page === item.label">
            <SidebarDropdown v-if="item.children" :items="item.children" :currentPage="currentPage"
                :page="item.label" />
            <!-- Dropdown Menu End -->
        </div>
    </li>
</template>
