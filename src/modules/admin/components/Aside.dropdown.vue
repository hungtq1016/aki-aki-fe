<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import { useSidebarStore } from '../stores/sidebar';
import type { TMenuItem } from '../models/type';

const sidebarStore = useSidebarStore()

const props = defineProps<{
    items: TMenuItem[]
    page: string
}>()

const items = ref(props.items)

const handleItemClick = (index: number) => {
    const pageName =
        sidebarStore.selected === props.items[index].label ? '' : props.items[index].label
    sidebarStore.selected = pageName
}
</script>

<template>
    <ul class="mt-4 mb-[22px] flex flex-col gap-2.5 pl-6">
        <template v-for="(childItem, index) in items" :key="index">
            <li>
                <router-link :to="`/${$i18n.locale}${childItem.route}`" @click="handleItemClick(index)"
                    class="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-regent-gray-600  duration-300 ease-in-out hover:text-white">
                    {{ $t(childItem.label) }}
                </router-link>
            </li>
        </template>
    </ul>
</template>

<style scoped>
.router-link-active.router-link-exact-active {
    @apply text-white;
}
</style>