<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <router-link :to="data.slug" class="relative mt-4">
        <img class="max-w-full rounded-full w-[160px] h-[160px] md:w-[300px] md:h-[300px] mx-auto pointer-events-none"
            :src="data.imageUrl" :alt="data.name">
        <div class="text-base md:text-[28px] leading-[42px] text-cerulean-600 mt-3 md:mt-6 text-center capitalize">
            {{ data.name }}
        </div>
    </router-link>
</template>

<script setup lang="ts">
import type { TSpecialist } from '../models/type';

defineProps<{
    data: TSpecialist
}>()
</script>
