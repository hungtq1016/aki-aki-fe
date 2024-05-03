<template>
    <div class="hidden lg:block lg:col-span-2">
        <div class="sticky top-[100px] z-40">
            <div class="w-72 max-w-full capitalize border border-cerulean-500 rounded-lg font-bold mb-3 flex py-4 items-center justify-center gap-x-4">
                <QueueListIcon class="w-6 h-6 text-cerulean-500" />
                <span class="text-cerulean-500">{{ $t('content.category') }}</span>
            </div>
            <AsideList/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { QueueListIcon } from '@heroicons/vue/24/outline';
import AsideList from '../components/Aside.list.vue';

</script>
