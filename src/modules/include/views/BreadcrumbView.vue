<template>
    <!-- breadcrumb -->
    <div class="relative w-full bg-gradient-to-r from-cerulean-50 from-10% via-cerulean-100 to-cerulean-600 mt-48">
        <div class="mx-auto max-w-screen-xl py-5">
            <div class="mb-4 text-sm md:text-lg flex gap-x-1 items-center">
                <router-link to="/" class="text-gray-900 hover:text-gray-950">{{ $t('route.home') }}</router-link>
                <span class="px-[5px]">
                    <ChevronRightIcon class="w-6 h-6 text-mountain-mist-500" />
                </span>
                <span class="text-mountain-mist-400">{{ $t(`route.${String(route.name)}`) }}</span>
            </div>
            <h2 class="text-cerulean-500 text-4xl md:text-[42px] capitalize leading-tight">{{
                    $t(`route.${String(route.name)}`) }}</h2>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/solid';
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
