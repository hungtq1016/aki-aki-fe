<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <aside id="profile-sidebar"
        class="w-64 h-auto transition-transform -translate-x-full sm:translate-x-0 border-r-[.5px]"
        aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-cerulean-50 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <AsideItem v-for="data in aside" :data="data" :key="data.id" />
            </ul>
        </div>
    </aside>
</template>

<script setup lang="ts">
import type { TUrl } from '@/modules/admin-branch/models/type';
import AsideItem from './Aside.item.vue';

const aside: TUrl[] = [
    {
        id: '1',
        label: 'route.profile',
        slug: '/profile',
        createdAt: '',
        enable: true,
        groupId: '',
        imageUrl: '',
        tag: '',
        type: '',
        updatedAt: ''
    },
    {
        id: '1',
        label: 'route.schedule',
        slug: '/profile/schedule',
        createdAt: '',
        enable: true,
        groupId: '',
        imageUrl: '',
        tag: '',
        type: '',
        updatedAt: ''
    }
]
</script>
