<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="items-center w-full sm:border sm:border-gray-100 sm:rounded-lg sm:flex bg-gray-50">
        <div class="py-4 sm:p-4 lg:p-5 xl:p-10 ">
            <SVGQuote class="w-5 sm:w-11 pb-3 fill-cerulean-300"/>
            <p class="pb-3 text-base">{{ data.quote }}</p>
            <p class="text-base text-gray-500">{{ data.author }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import SVGQuote from '@/core/components/svg/SVG.quote.vue';
import type { TQuote } from '../models/type';

defineProps<{
    data: TQuote
}>()
</script>