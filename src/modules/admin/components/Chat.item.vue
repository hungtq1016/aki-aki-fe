<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <RouterLink to="/" class="flex items-center gap-5 py-3 px-[30px] hover:bg-alabaster-50 dark:hover:bg-oxford-blue-900">
        <div class="relative h-14 w-14 rounded-full">
            <img :src="data.avatar" :alt="data.name" />
            <span class="absolute right-0 bottom-0 h-[14px] w-[14px] rounded-full border-2 border-white"
                :style="{ backgroundColor: data.color }"></span>
        </div>

        <div class="flex flex-1 items-center justify-between">
            <div>
                <h5 class="font-medium text-slate-950 dark:text-white">{{ data.name }}</h5>
                <p>
                    <span class="text-sm text-slate-950 dark:text-white">{{ data.text }}</span>
                    <span class="text-xs"> . {{ data.time }} min</span>
                </p>
            </div>
            <div v-if="data.textCount !== 0"
                class="flex h-6 w-6 items-center justify-center rounded-full bg-cerulean-600">
                <span class="text-sm font-medium text-white"> {{ data.textCount }}</span>
            </div>
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import type { TChat } from '../models/type';

defineProps<{
    data: TChat
}>()
</script>
