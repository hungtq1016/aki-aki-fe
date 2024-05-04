<template>
    <div
        class="absolute inset-0 text-slate-900 [mask-image:linear-gradient(to_bottom_left,black,transparent,transparent)]">
        <SVGSquareGrid class="absolute inset-0 h-full w-full fill-cerulean-100" />
    </div>
    <main class="relative flex flex-1 flex-col overflow-hidden px-4 py-8 sm:px-6 lg:px-8 min-h-screen">
        <div class="relative flex flex-1 flex-col items-center justify-center pb-16 pt-12">
            <h1 class="sr-only">your app account</h1>
            <h3 class="text-3xl font-bold">{{ $t(`route.${String(route.name)}`) }}</h3>
            <router-view></router-view>
            <div class="mt-5">
                <router-link to="/"
                    class="flex items-center gap-x-2 justify-center text-sm text-gray-500 font-light hover:text-gray-900 duration-300 ease-in-out">
                    <ArrowLongLeftIcon class="w-4 h-4" />
                    <span>{{ $t('content.back_home') }}</span>
                </router-link>
            </div>
        </div>

    </main>
</template>

<script setup lang="ts">
import SVGSquareGrid from '@/core/components/svg/SVG.square.grid.vue'
import { ArrowLongLeftIcon } from '@heroicons/vue/24/outline';
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
