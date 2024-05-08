<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { useSidebarStore } from '../stores/sidebar';
import AsideItem from '../components/Aside.item.vue';
import AsideLocale from '../components/Aside.locale.vue';
import { target, menus } from '../services/data/data';

const sidebarStore = useSidebarStore()

onClickOutside(target, () => {
    sidebarStore.isSidebarOpen = false
})

</script>

<template>
    <aside
        class="absolute left-0 top-0 z-50 flex h-screen w-[290px] flex-col justify-between py-5 overflow-y-hidden bg-slate-950 duration-300 ease-linear dark:bg-gray-950  lg:static lg:translate-x-0"
        :class="{
            'translate-x-0': sidebarStore.isSidebarOpen,
            '-translate-x-full': !sidebarStore.isSidebarOpen
        }" ref="target">
        <div class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
            <!-- Sidebar Menu -->
            <nav class="px-4 lg:px-6">
                <template v-for="menuGroup in menus" :key="menuGroup.name">
                    <div>
                        <h3 class="mb-4 ml-4 text-sm font-medium text-regent-gray-600 ">{{ $t(menuGroup.name) }}</h3>

                        <ul class="mb-6 flex flex-col gap-1.5">
                            <AsideItem v-for="(menuItem, index) in menuGroup.menuItems" :item="menuItem" :key="menuItem.label"
                                :index="index" />
                        </ul>
                    </div>
                </template>
            </nav>
            <!-- Sidebar Menu -->

        </div>
        <AsideLocale />
    </aside>
</template>
